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
  return (
    <div className="details ">
      <div className="future col-12 col-lg-9 row g-0 p-0 justify-content-evenly pt-5">
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
      <Footer />
    </div>
  );
}
