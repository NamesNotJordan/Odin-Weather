import "./style.css";
import {getWeatherToday} from "./weatherFetcher.js"

document.getElementById("weather-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("making request");
    const city = document.getElementById("city-input").value;
    if(city === "") {
        alert("Please enter a city name. Examples: \"London\" \"New York, NY\"'");
        return;
    }
    const unitSystem = document.querySelector('input[name="temp-unit"]:checked').value;
    getWeatherToday(city, unitSystem).then((weatherData) => {
        console.log(weatherData);
        renderCurrentForecast(weatherData);
    }).catch( (error) => {
        console.error("Error fetching weather data:", error);
        alert("Unable to fetch weather data. Please try again later.");
    });
})

function renderCurrentForecast(weatherData) {
    const forecastHeading = document.getElementById("forecast-heading");
    const temperatureText = document.getElementById("temperature-text");
    const conditionText = document.getElementById("condition-text");

    const address = weatherData.resolvedAddress;
    let temperature = weatherData.currentConditions.temp;
    const conditions = weatherData.currentConditions.conditions;
    let icon = weatherData.currentConditions.icon;

    forecastHeading.innerHTML = `<span>Forecast for</span> \n${address}`;
    temperatureText.innerHTML = `${temperature}°${getTempuratureUnit()}`;
    conditionText.innerHTML = conditions;
    setIcon(icon);
    document.getElementById("forecast").classList.add("show");
}

function getTempuratureUnit () {
    let system = document.querySelector('input[name="temp-unit"]:checked').value;
    if (system === "us") {
        return "F";
    } else {
        return "C";
    }
}
function setIcon(iconID) {
    const icon = document.getElementById("weather-icon");
    const baseUrl = "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/4th%20Set%20-%20Color";
    icon.src = `${baseUrl}/${iconID}.svg`;
    icon.alt = iconID;
    icon.style.display = "block";
}