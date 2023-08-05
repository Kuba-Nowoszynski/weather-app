import { useState, useEffect } from "react";

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;
export default function CurrentWeather() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const getWeather = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=54&lon=19&appid=${API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch weather data");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const celsiusTemp = Math.floor(kelvinToCelsius(data.main.temp));
          setWeather(celsiusTemp);
        })
        .catch((err) => {
          console.error("Error fetching weather data:", err);
        });
    };

    getWeather();
  }, []);
  return (
    <>
      <div className="weather-icon my-0 mx-auto "></div>
      <div className="my-4 mx-auto">
        <h2 style={{ fontSize: "8em" }}>
          {weather}
          <span className="text-white-50 " style={{ fontSize: ".5em" }}>
            &deg;C
          </span>
        </h2>
        <h4 className="text-white-50" style={{ fontSize: "2em" }}>
          Shower
        </h4>
      </div>
    </>
  );
}
