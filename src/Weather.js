import React, { useState } from "react";


export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setWeather(city={city});
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="showWeather">
      <form onSubmit={handleClick}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{weather}</p>
    </div>
  );
}
