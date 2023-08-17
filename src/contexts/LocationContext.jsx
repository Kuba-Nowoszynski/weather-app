/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

const fetchAPI = async () =>
  await axios
    .get("/.netlify/functions/get-api")
    .then((response) => response.data.secret)
    .catch(() => import.meta.env.VITE_OPEN_WEATHER_KEY);

export const LocationContext = createContext({
  searchLocation: () => {},
  searchByCoords: () => {},
  weather: {},
  forecast: [],
  errorMessage: "",
});

export const LocationProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [errorMessage, setErorrMessage] = useState("");

  const searchLocation = async (search) => {
    setErorrMessage("");
    const API_KEY = await fetchAPI();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=5&appid=${API_KEY}&units=metric`;

    const data = await axios //get  current weather data
      .get(url)
      .then((response) => response.data)
      .catch(() => setErorrMessage("Invalid place"));
    console.log(data ? true : false);
    if (data) {
      await axios
        .get(forecastUrl)
        .then((response) => setForecast(response.data.list))
        .then(setWeather(data));
    } //set 5-day forecast and current weather if have current weather data
  };

  const searchByCoords = async (lat, lon) => {
    setErorrMessage("");
    const API_KEY = await fetchAPI();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=metric`;

    const data = await axios //get  current weather data
      .get(url)
      .then((response) => response.data)
      .catch(() => setErorrMessage("Invalid place"));
    console.log(data ? true : false);
    if (data) {
      await axios
        .get(forecastUrl)
        .then((response) => setForecast(response.data.list))
        .then(setWeather(data));
    } //set 5-day forecast and current weather if have current weather data
  };

  const value = {
    searchLocation,
    searchByCoords,
    weather,
    forecast,
    errorMessage,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
