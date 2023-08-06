import { useContext } from "react";
import { LocationContext } from "../../../contexts/LocationContext";

import "./navigation-styles.scss";

export default function Navigation() {
  const { location, locationData, searchLocation } =
    useContext(LocationContext);

  console.log(locationData);
  const onChangeHandler = (e) => {
    const searchValue = e.target.value;
    searchLocation(searchValue);
  };

  return (
    <div className="row g-0  d-flex justify-content-between justify-content-lg-around align-items-center">
      <input
        className="search col-6 col-lg-5 ms-3 ms-lg-0 bg-secondary py-2  px-1 rounded-1 border-0 text-white text-center "
        placeholder="Search place"
        value={location}
        onChange={onChangeHandler}
      />

      <div className="col-1 me-3 me-lg-0">
        <button className="locationBtn btn btn-secondary rounded-circle px-2 py-1 fs-5">
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
    </div>
  );
}
