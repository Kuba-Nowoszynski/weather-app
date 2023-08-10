/* eslint-disable react/prop-types */
import weather_images from "../../../utils/weather_images.json";

import "./daily-weather-styles.scss";

export default function DailyWeather({ temp, day, weatherDescription }) {
  return (
    <>
      <div className="daily-weather-container  col-4 mx-1  d-flex flex-column justify-content-around align-items-center">
        <h6 className="fs-5 fw-normal">{day}</h6>
        <div
          className="weather-icon"
          style={{
            backgroundImage: `url(${weather_images[weatherDescription]})`,
          }}
        ></div>
        <p className="align-self-stretch text-center fs-4">{temp}&deg;C</p>
      </div>
    </>
  );
}
