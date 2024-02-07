//
import { useState, useEffect, useRef, useContext, createContext } from "react";
import WeatherForcast from "./WeatherForcast.jsx";
import ModalCountry from "../Countries.jsx";

import "../../Styles/weather.css";

const cityContext = createContext("default_value");
console.log(cityContext);

export default function Weather() {
  const [weather, setWeather] = useState();
  const [forcast, setForcast] = useState();
  const [location, setLocation] = useState(false);

  const [city, setCity] = useState("Dnipro");
  const [lat, setLat] = useState(48.45);
  const [lon, setLon] = useState(34.98);

  const apiKey1 = "ac4d8af28a8c864ae7422cba18ba1e76";
  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${apiKey1}`;
  const forcast8Days = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&lang=ua&appid=${apiKey1}`; // lon}&exclude=current,minutely,hourly

  useEffect(() => {
    fetch(currentWeather)
      .then((response) => response.json())
      .then((json) => {
        console.log("currentWeather: ", json);
        let lat = json.coord.lat;
        let lon = json.coord.lon;
        setLat(lat);
        setLon(lon);
        setWeather(json);
      });
    fetch(forcast8Days)
      .then((response) => response.json())
      .then((json) => {
        console.log("forcast8Days: ", json);
        setForcast(json);
      });
  }, [city, lat, lon]);
  //
  const showLocation = () => {
    setLocation(!location);
  };
  const getInitState = (e) => {
    console.log("e: ", e);
    setCity(e);
    setLocation(!location);
  };

  return (
    <div className="weather_app">
      <cityContext.Provider value={city}>
        {location && <ModalCountry onInitState={getInitState} />}
      </cityContext.Provider>

      {weather && (
        <div className="weather">
          <div className="weather_title-wrap">
            <div className="weather_title">
              <div className="weather_time">
                <div className="weather_temp-time">
                  {forcast && (
                    <div style={{ fontSize: "10px" }}>
                      {new Date(forcast.current.dt * 1000).toLocaleTimeString(
                        "uk-UA",
                        { hour: "2-digit", minute: "2-digit" },
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div onClick={() => showLocation()} className="weather_city">
                <div className="weather_city-name">
                  <div className="weather_city-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 107.86 122.88"
                    >
                      <defs></defs>
                      <title>gps</title>
                      <path d="M86.07,81.78c13.22,4.16,21.79,10.81,21.79,18.31,0,12.59-24.14,22.79-53.93,22.79S0,112.68,0,100.09c0-7.68,9-14.47,22.73-18.6.5.76,1,1.52,1.51,2.26q1.61,2.34,3.33,4.6c-9.62,2.58-15.79,6.56-15.79,11,0,7.78,18.67,14.09,41.71,14.09s41.7-6.31,41.7-14.09c0-4.16-5.34-7.9-13.84-10.48,1.67-2.29,3.24-4.67,4.72-7.12ZM71.65,84.49A70.47,70.47,0,0,1,56.22,97.26a2.17,2.17,0,0,1-2.48.08A87,87,0,0,1,32.27,78.19C24.45,68.38,19.53,57.5,17.84,47,16.13,36.4,17.73,26.18,23,17.87A35.87,35.87,0,0,1,31,9C38.47,3.08,47-.06,55.47,0A34.42,34.42,0,0,1,78.68,9.48,34.33,34.33,0,0,1,84.88,17c5.68,9.37,6.91,21.31,4.41,33.41a73.54,73.54,0,0,1-17.64,34v0Zm-17.8-65.6A18.25,18.25,0,1,1,35.6,37.14,18.24,18.24,0,0,1,53.85,18.89Z" />
                    </svg>
                  </div>
                  {weather.name}
                </div>

                <div className="weather_wind">
                  {forcast && (
                    <svg
                      style={{
                        transform: `rotate(${forcast.current.wind_deg - 45}deg)`,
                      }}
                      className="weather_icon-wind"
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                    >
                      <path d="M272,464a16,16,0,0,1-16-16.42V264.13a8,8,0,0,0-8-8H64.41a16.31,16.31,0,0,1-15.49-10.65,16,16,0,0,1,8.41-19.87l384-176.15a16,16,0,0,1,21.22,21.19l-176,384A16,16,0,0,1,272,464Z" />
                    </svg>
                  )}
                  {forcast && (
                    <span className="weather_city-windspeed">
                      {Math.round(forcast.current.wind_speed)} &nbsp; m/s
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div className="weather_desc">
                  {weather.weather[0].description}
                </div>
                <div className="weather_icon-wrapper">
                  <img
                    className="weather_icon"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt={weather.weather[0].description}
                  />
                </div>
              </div>

              {forcast && (
                <div className="weather_temp">
                  {Math.round(forcast.current.temp)}
                  <span className="weather_temp-celsium">&#8451;</span>
                </div>
              )}
            </div>

            {/*
             */}
          </div>

          {forcast && (
            <div className="weather_forcast">
              <WeatherForcast forcast={forcast} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
