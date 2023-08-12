import { useContext, useState } from "react";
import { LocationContext } from "../../../contexts/LocationContext";

import "./navigation-styles.scss";

export default function Navigation() {
  const { searchLocation, searchByCoords } = useContext(LocationContext);

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchLocation(searchValue);
      setSearchValue("");
    }
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Cannot receive your location :(");
    }
  }

  function showPosition(position) {
    const { latitude: lat, longitude: lon } = position.coords;
    searchByCoords(lat, lon);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("You have denied the access to your location");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Your location position in unavailable");
        break;
      case error.TIMEOUT:
        alert("Could not receive your location information in time. Try again");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred. Try again");
        break;
    }
  }

  return (
    <div className="row g-0 pt-2 pt-md-3  d-flex justify-content-between justify-content-md-around align-items-center">
      <input
        type="text"
        className="search col-6 col-md-5 ms-3 ms-md-0 bg-secondary py-2 py-md-1  px-1 rounded-1 border-0 text-white text-center "
        placeholder="Search place"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />

      <div className="col-1 me-3 me-lg-0">
        <button
          className="locationBtn btn btn-secondary rounded-circle px-2 py-1 fs-5"
          onClick={getLocation}
        >
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
    </div>
  );
}
