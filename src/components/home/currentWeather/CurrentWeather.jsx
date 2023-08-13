import { useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";
import "animate.css";
import weather_images from "../../../utils/weather_images.json";

import "./current-weather-styles.scss";
export default function CurrentWeather() {
  const { weather } = useContext(LocationContext);
  const haveData = weather.main;

  return (
    <>
      <div
        className={`weather-icon my-0 mx-auto pulse`}
        style={{
          backgroundImage: `url(${
            haveData
              ? weather_images[weather.weather[0].main]
              : weather_images.LightCloud
          })`,
        }}
      ></div>
      {haveData && (
        <div className="weather-temp my-4 my-md-0 mx-auto animate__animated animate__bounce">
          <h2>
            {Math.round(weather.main.temp)}
            <span className="text-white-50 ">&deg;C</span>
          </h2>
          <h4 className="text-white-50">{weather.weather[0].main}</h4>
        </div>
      )}
    </>
  );
}
