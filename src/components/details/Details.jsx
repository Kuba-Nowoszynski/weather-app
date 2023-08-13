import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import getDays from "../../utils/getDays";
const daysNames = getDays().slice(1);

import DailyWeather from "./dailyWeather/DailyWeather";
import Highlights from "./highlights/Highlights";
import Footer from "../footer/Footer";

import "./details-styles.scss";

getDays();

export default function Details() {
  const { forecast } = useContext(LocationContext);
  const haveData = forecast.length !== 0;

  return (
    <div
      className={`details col-12 col-md-9  p-0 g-0  pt-lg-4 ${
        !haveData ? "mockup" : ""
      }`}
    >
      <div
        className={`future row  g-0 justify-content-evenly ${
          haveData ? "pt-5 px-md-4 pt-md-2 pt-lg-4  " : ""
        }`}
      >
        {forecast.map((day, i) => (
          <DailyWeather
            key={crypto.randomUUID()}
            temp={Math.round(day.main.temp)}
            day={daysNames[i]}
            weatherDescription={day.weather[0].main}
          />
        ))}
      </div>
      <Highlights />

      <Footer haveData={haveData} />
    </div>
  );
}
