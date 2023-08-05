import "./navigation-styles.scss";

export default function Navigation() {
  const searchHandler = () => console.log("search location");
  const setLocationHandler = async () => {
    await console.log("setting current location");
    alert("Allow permissions to share your location data");
  };

  return (
    <div className="row g-0  d-flex justify-content-between justify-content-lg-around align-items-center">
      <h4
        onClick={searchHandler}
        className="col-6 col-lg-5 ms-3 ms-lg-0 bg-secondary py-2  rounded-1"
      >
        Search for places
      </h4>
      <div className="col-1 me-3">
        <button
          onClick={setLocationHandler}
          className="locationBtn btn btn-secondary rounded-circle px-2 py-1 fs-5"
        >
          <i className="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
    </div>
  );
}
