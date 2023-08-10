import { useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";
import weather_images from "../../../utils/weather_images.json";
export default function CurrentWeather() {
  const { weather } = useContext(LocationContext);
  const haveData = weather.main;

  //default "LightCloud": "images/LightCloud.png",

  return (
    <>
      <div
        className="weather-icon my-0 mx-auto "
        style={{
          backgroundImage: `url(${
            haveData
              ? weather_images[weather.weather[0].main]
              : weather_images.LightCloud
          })`,
        }}
      ></div>
      {haveData && (
        <div className="my-4 mx-auto">
          <h2 style={{ fontSize: "8em" }}>
            {Math.round(weather.main.temp)}
            <span className="text-white-50 " style={{ fontSize: ".5em" }}>
              &deg;C
            </span>
          </h2>
          <h4 className="text-white-50" style={{ fontSize: "2em" }}>
            {weather.weather[0].main}
          </h4>
        </div>
      )}
    </>
  );
}
