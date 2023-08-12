import { useState, useEffect, useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";

import HighlightsItem from "./highlightsItem/HighlightsItem";
import getWindDirection from "./getWindDirection";

import "./highlights-styles.scss";

export default function Highlights() {
  const [weatherHighlights, setWeatherHighlights] = useState({
    windSpeed: null,
    windDeg: null,
    humidity: null,
    pressure: null,
    visibility: null,
  });
  const { windSpeed, windDeg, humidity, pressure, visibility } =
    weatherHighlights;
  const { weather } = useContext(LocationContext);
  const haveData = Object.keys(weather).length > 0;
  useEffect(() => {
    if (haveData) {
      const { speed, deg } = weather.wind;
      const { humidity, pressure } = weather.main;
      const { visibility } = weather;
      const apiResponse = {
        windSpeed: speed,
        windDeg: deg,
        humidity,
        pressure,
        visibility: (visibility / 1000).toFixed(1),
      };
      setWeatherHighlights(apiResponse);
    }
  }, [weather, haveData]);
  //weather.wind.speed m/s AND .deg degrees(meteorological)
  //weather.main.humidity %
  //weather.main.pressure hPa
  //weather.visibility (metres - maximum 10km (10 000))

  return (
    haveData && (
      <div className="highlights pt-sm-5 mt-sm-5 pt-md-3 mt-md-5">
        <h2 className="text-white mb-4 mb-md-1 mb-lg-4 ms-4 fs-1 fw-bold">
          Today&apos;s Highlights
        </h2>
        <div className="highlights-container d-flex flex-column flex-md-row align-items-center justify-content-center row p-0 g-0 ">
          <HighlightsItem
            type="wind"
            title="Wind Status"
            value={windSpeed}
            extra={getWindDirection(windDeg)}
          />
          <HighlightsItem
            type="humidity"
            title="Humidity"
            value={humidity}
            className={"pt-md-2 pb-md-2"}
          />
          <HighlightsItem
            type="visibility"
            title="Visibility"
            value={visibility}
          />
          <HighlightsItem
            type="pressure"
            title="Air Pressure"
            value={pressure}
          />
        </div>
      </div>
    )
  );
}
