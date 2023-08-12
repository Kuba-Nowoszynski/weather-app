/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

async function fetchAPI() {
  try {
    const response = await axios.get("/.netlify/functions/get-api");
    const data = response.data;
    return data.secret;
  } catch (error) {
    console.error("Error:", error);
    return import.meta.env.VITE_OPEN_WEATHER_KEY;
  }
}
const API_KEY = await fetchAPI();

export const LocationContext = createContext({
  location: "",
  setLocation: () => {
    null;
  },
  weather: {},
});

export const LocationProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const searchLocation = async (search) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url); //get current weather data
    const data = response.data;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=5&appid=${API_KEY}&units=metric`; //get 5-day forecast data
    const forecastData = await axios.get(forecastUrl);
    setWeather(data);
    setForecast(forecastData.data.list);
  };

  const searchByCoords = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url); //get current weather data
    const data = response.data;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=metric`; //get current weather data
    const forecastData = await axios.get(forecastUrl);
    setWeather(data);
    setForecast(forecastData.data.list);
  };

  const value = { searchLocation, searchByCoords, weather, forecast };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
