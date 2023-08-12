import Navigation from "./navigation/Navigation";
import CurrentWeather from "./currentWeather/CurrentWeather";
import DateAndLocation from "./dateAndLocation/DateAndLocation";

import "./home-styles.scss";

export default function Home() {
  return (
    <>
      <div className="home-page d-flex flex-column justify-content-around text-center text-white  col-12 col-md-3">
        <Navigation />
        <CurrentWeather />
        <DateAndLocation />
      </div>
    </>
  );
}
