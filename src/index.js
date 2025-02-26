import "./style.css";
import {getWeatherToday} from "./weatherFetcher.js"

document.getElementById("weather-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("making request");
    getWeatherToday("London,UK").then((weatherData) => console.log(weatherData));
})