import { createContext, useContext, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(Cookies.get("authData"));

  useEffect(() => {
    const checkToken = () => {
      const newToken = Cookies.get("authData");
      if (newToken !== token) {
        setToken(newToken);
      }
    };

    const interval = setInterval(checkToken, 1000);

    return () => clearInterval(interval);
  }, [token]);

  useEffect(() => {
    const token = Cookies.get("authData");
    let decoded = null;
    if (token) {
      try {
        decoded = jwtDecode(token);
        if (decoded?.role === 2) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setIsAdmin(false);
      }
    } else {
      console.warn("No authData cookie found");
    }
  }, [token]);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
