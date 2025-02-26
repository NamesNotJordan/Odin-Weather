import {getWeather} from "./weatherFetcher.js"

console.log("making request");
getWeather("London,UK").then((weatherData) => console.log(weatherData))
