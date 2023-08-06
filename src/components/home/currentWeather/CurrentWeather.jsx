import { useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";

export default function CurrentWeather() {
  const { weather } = useContext(LocationContext);
  const { celsiusTemp } = weather;

  // console.log(weather);

  return (
    <>
      <div className="weather-icon my-0 mx-auto "></div>
      <div className="my-4 mx-auto">
        <h2 style={{ fontSize: "8em" }}>
          {celsiusTemp}
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
