import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LocationProvider } from "./contexts/LocationContext.jsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>
);
