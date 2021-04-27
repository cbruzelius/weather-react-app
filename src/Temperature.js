import React, { useState } from "react";
import axios from "axios";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [city, setCity] = useState("");

  function showTemperature(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
    setCity (response.data.name);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7810de17cb3e4ad4b94e69a98fbe80a0&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <div>
      <ul>
        <li> 
          <h3>
          {city}
          </h3>
        </li>
        <li>Temperature: {temperature}°C</li>
        <li>{description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind Speed: {wind}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            className="weatherIcon"
            alt="current weather icon"
          />
        </li>
      </ul>
    </div>
  );
}