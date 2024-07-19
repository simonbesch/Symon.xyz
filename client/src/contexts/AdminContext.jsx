import { createContext, useContext, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.get("authData");
  let decoded = null;

  useEffect(() => {
    if (token) {
      try {
        decoded = jwtDecode(token);
        console.info(decoded);
        if (decoded?.role === 2) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    } else {
      console.warn("No authData cookie found");
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
