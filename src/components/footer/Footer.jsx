/* eslint-disable react/prop-types */
import "./footer-styles.scss";

export default function Footer({ haveData }) {
  return (
    <h6
      className={`footer text-white-50 text-center pt-md-3 pt-lg-4 mt-lg-3 ${
        !haveData ? "bottom" : ""
      }`}
    >
      Created by Kuba Nowoszyński
    </h6>
  );
}
