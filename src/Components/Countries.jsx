//
import { useState, useEffect, useRef } from "react";

import Country from "./Country";

const countries = "https://countriesnow.space/api/v0.1/countries";

export default function ModalCountries(props) {
  const [country, setCoutry] = useState();

  useEffect(() => {
    fetch(countries)
      .then((data) => data.json()) // parse JSON
      .then((data) => {
        console.log(data);
        return data.data;
      })
      .then((data) => {
        setCoutry(data);
      }); // get array
  }, []);

  const getInitState = (e) => {
    props.onInitState(e);
    console.log(props);
    console.log("e: ", e);
  };
  const selectCountries = ["Ukraine", "Lithuania", "Poland"];
  return (
    <div className="modal_country">
      {country &&
        country
          .filter((item, index) => {
            return selectCountries.some((country) => item.country == country);
          })
          .map((item, idx) => (
            <Country onInitState={getInitState} coutryName={item} key={idx} />
          ))}
    </div>
  );
}
