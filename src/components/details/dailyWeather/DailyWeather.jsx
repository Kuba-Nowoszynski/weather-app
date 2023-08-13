/* eslint-disable react/prop-types */
import weather_images from "../../../utils/weather_images.json";

import "./daily-weather-styles.scss";

export default function DailyWeather({ temp, day, weatherDescription }) {
  return (
    <>
      <div className="daily-weather-container  col-4 col-md-2 mx-1  d-flex flex-column justify-content-evenly align-items-center">
        <h6 className="fw-normal p-0 m-0">{day}</h6>
        <div
          className="weather-icon "
          style={{
            backgroundImage: `url(${weather_images[weatherDescription]})`,
          }}
        ></div>
        <h6 className="align-self-stretch text-center p-0 m-0">{temp}&deg;C</h6>
      </div>
    </>
  );
}
