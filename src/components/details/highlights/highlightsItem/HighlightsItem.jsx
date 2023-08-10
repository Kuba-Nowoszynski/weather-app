/* eslint-disable react/prop-types */
import "./highlights-item-styles.scss";

export default function HighlightsItem({ type, title, value, extra }) {
  const unitTypes = {
    wind: "m/s",
    humidity: "%",
    visibility: "km",
    pressure: "hPa",
  };
  const unit = unitTypes[type];
  //weather.wind.speed m/s AND .deg degrees(meteorological)
  //weather.main.humidity %
  //weather.main.pressure hPa
  //weather.visibility (metres - maximum 10km (10 000))

  return (
    <div
      className="highlights-item my-3 pb-3 d-flex flex-column align-items-center 
    "
    >
      <h5 className="title m-0 pt-4">{title}</h5>
      <div className="value ">
        <span className="fw-bold">{value}</span>
        {unit}
      </div>
      {extra && <div className="extra-data pt-4">{extra}</div>}
      {type === "humidity" ? (
        <div
          className="progress"
          role="progressbar"
          aria-label="Warning example"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}
