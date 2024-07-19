import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const WeatherKey = import.meta.env.VITE_WEATHER_KEY;
  const [time, setTime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Tours&appid=${WeatherKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTime(data);
        setIsLoading(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <WeatherContext.Provider value={{ time, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
