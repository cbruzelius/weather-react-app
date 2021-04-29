import React, { useState } from "react";
import Temperature from "./Temperature";


export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setWeather(<Temperature city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="showWeather">
      <form onSubmit={handleClick}>
        <input className="inputBar" type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{weather}</p>
    </div>
  );
}
