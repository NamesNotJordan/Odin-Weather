import "./style.css";
import {getWeatherToday} from "./weatherFetcher.js"

document.getElementById("weather-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("making request");
    getWeatherToday("London,UK").then((weatherData) => {
        console.log(weatherData);
        showForecast(weatherData);
    });
})

function showForecast(weatherData) {
    document.getElementById("forecast").style.display = "flex";
    const forecastHeading = document.getElementById("forecast-heading");
    const temperatureText = document.getElementById("temperature-text");
    const conditionText = document.getElementById("condition-text");

    const address = weatherData.address;
    const temperature = weatherData.days[0].temp;
    const conditions = weatherData.days[0].conditions

    forecastHeading.innerHTML = `Forecast for ${address}`;
    temperatureText.innerHTML = `${temperature}°C`;
    conditionText.innerHTML = conditions;
}