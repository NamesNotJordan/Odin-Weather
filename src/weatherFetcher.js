// Contains functions fo interacting with the weather API
import {format} from "date-fns"

const WEATHER_API = "EVB43527DCXUA9T7NFZ4XCN7F";

export async function getWeatherToday(location, unit = "metric") {
    try {
        const currentDate = format(new Date(), "yyy-MM-dd");
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${currentDate}?key=${WEATHER_API}&unitGroup=${unit}&iconSet=icons2`,{mode: 'cors'}); 
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }
     
}