/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";
import createAction from "../utils/reducer/reducerUtils";
createAction;

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;
const limit = 3; //check how can I use it

function kelvinToCelsius(kelvin) {
  return Math.floor(kelvin - 273.15);
}

const getCoordinates = (searchLocation, defaultData) => {
  console.log("in coords", searchLocation);
  if (searchLocation) {
    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      searchLocation
    )}&limit=${limit}&appid=${API_KEY}`;

    const data = fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data[0] ? data[0] : defaultData;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return data;
  }
  return defaultData;
};

const getWeather = async (lat, lon) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const data = await fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error("Error fetching weather data:", err);
    });
  const celsiusTemp = kelvinToCelsius(data.main.temp);

  const weatherData = { celsiusTemp };
  return weatherData;
};

export const LocationContext = createContext({
  location: "",
  searchLocation: () => "",
  locationData: {},
});

const Location_Action_Types = {
  setData: "setData",
};

const locationReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Location_Action_Types.setData:
      return { ...state, ...payload };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const initialState = {
  location: "",
  locationData: { name: "Gdańsk", lat: 54.42880315, lon: 18.798325902846855 },
  weather: { celsiusTemp: 9 },
};

export const LocationProvider = ({ children }) => {
  const [{ location, locationData, weather }, dispatch] = useReducer(
    locationReducer,
    initialState
  );

  const searchLocation = (search) => {
    dispatch(
      createAction(Location_Action_Types.setData, {
        location: search,
      })
    );
  };

  useEffect(() => {
    const setCoordinates = async () => {
      const defaultData = locationData;
      const coordsData = await getCoordinates(location, defaultData);
      const coords = coordsData;

      dispatch(
        createAction(Location_Action_Types.setData, {
          locationData: coords,
        })
      );
    };
    setCoordinates();
  }, [location]);

  useEffect(() => {
    const setWeather = async () => {
      const { lat, lon } = locationData;
      const newWeather = await getWeather(lat, lon);
      dispatch(
        createAction(Location_Action_Types.setData, {
          weather: newWeather,
        })
      );
    };
    setWeather();
  }, [locationData]);

  const value = { location, searchLocation, locationData, weather };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
