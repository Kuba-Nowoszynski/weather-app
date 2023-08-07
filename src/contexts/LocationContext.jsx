/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;

export const LocationContext = createContext({
  location: "",
  setLocation: () => {
    null;
  },
  weather: {},
});

export const LocationProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  const searchLocation = async (search) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(response.data);
    setWeather(data);
  };
  const value = { searchLocation, weather };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
