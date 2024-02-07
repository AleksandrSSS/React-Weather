//
import { useState, useEffect, useRef } from "react";

import City from "./City";

export default function Country(props) {
  //   console.log("Country-props => coutryName: ", coutryName);
  const [toShow, setToShow] = useState(false);
  const [getInitStateValue, setInitState] = useState("");
  // const childRef = useRef();
  const getCity = () => {
    setToShow(!toShow);
    console.log("toShow: ", toShow);
  };
  const getInitState = (e) => {
    console.log("e: ", e);

    props.onInitState(e);

    setInitState(e);
    setToShow(!toShow);
    console.log("getInitStateValue: ", getInitStateValue);
  };

  return (
    <div className={toShow ? "country_item active" : "country_item"}>
      <p className="country_title" onClick={getCity}>
        {props.coutryName.country.toUpperCase()}
      </p>
      <ul className="city_list">
        {toShow && (
          <City onInitState={getInitState} cityName={props.coutryName.cities} />
        )}
      </ul>
    </div>
  );
}
