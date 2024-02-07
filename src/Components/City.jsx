import { useState, useEffect, useRef } from "react";

let storageRequest = localStorage.getItem("storageCity");

export default function City(props) {
  // const [value, setValue] = useState("");
  const renameCity = (correctCityName) => {
    const correctCity = {
      Kyyiv: "Kyiv",
      Kiev: "Kyiv",
      Dnipropetrovsk: "Dnipro",
    };
    return correctCity[correctCityName]
      ? correctCity[correctCityName]
      : correctCityName;
  };
  const handleClick = (cityName) => {
    cityName = renameCity(cityName);

    props.onInitState(cityName);
    // setValue(cityName);

    console.log("cityName => ", cityName);
  };
  return (
    <>
      {props &&
        props.cityName.map((city, idx) => (
          <li className="city_item" onClick={() => handleClick(city)} key={idx}>
            {city}
          </li>
        ))}
    </>
  );
}
