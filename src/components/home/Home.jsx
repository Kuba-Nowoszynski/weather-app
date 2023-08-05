import Navigation from "./navigation/Navigation";
import CurrentWeather from "./currentWeather/CurrentWeather";
import DateAndLocation from "./dateAndLocation/DateAndLocation";

import "./home-styles.scss";

export default function Home() {
  return (
    <>
      <div className="left-page d-flex flex-column justify-content-around text-center text-white">
        <Navigation />
        <CurrentWeather />
        <DateAndLocation />
      </div>
    </>
  );
}
