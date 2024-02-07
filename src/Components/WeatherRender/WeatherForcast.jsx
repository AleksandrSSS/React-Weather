//
// import { useState, useEffect } from "react";
import WeatherForcastItem from "./WeatherForcastItem.jsx";

import "../../Styles/weather.css";

export default function WeatherForcast({ forcast }) {
  // console.log("WeatherForcast(props)", forcast);
  //
  return (
    <div className="weather_forcast-wrapper">
      {/* <p className="weather_forcast-title">Прогноз на 8 днів</p> */}

      <WeatherForcastItem item={forcast.daily} itemHourly={forcast.hourly} />
    </div>
  );
}
