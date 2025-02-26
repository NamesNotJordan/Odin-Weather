// Contains functions fo interacting with the weather API
const WEATHER_API = "EVB43527DCXUA9T7NFZ4XCN7F";

async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}`,{mode: 'cors'}); 
    } catch (error) {
        console.log(error);
    }
     
}