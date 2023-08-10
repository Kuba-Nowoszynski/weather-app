import { useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";
import getDays from "../../../utils/getDays";
const today = getDays()[0];
export default function DateAndLocation() {
  const { weather } = useContext(LocationContext);
  const location = weather.name ? weather.name : null;

  return (
    <>
      <div className="info-container text-secondary d-flex flex-column justify-content-between align-items-center mx-auto ">
        <div className="date-container d-flex justify-content-evenly gap-3 my-1">
          <span>Today</span>
          <span>&middot;</span>
          <span>{today}</span>
        </div>
        {location && (
          <div className="location-container d-flex justify-content-evenly align-items-center gap-2 my-1">
            <i className="fa-solid fa-location-dot"></i>
            <span>{location}</span>
          </div>
        )}
      </div>
    </>
  );
}
