import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather()
{
    const weatherTemplate = ProxyState.celcius ? ProxyState.weather.CelciusTemplate : ProxyState.weather.FarenheitTemplate;
    document.getElementById("weather").innerHTML = weatherTemplate;
}

export class WeatherController
{
    constructor()
    {
        ProxyState.on("weather", _drawWeather);
        ProxyState.on("celcius", _drawWeather);
        weatherService.getWeather();
    }

    toggleUnits()
    {
        try
        {
            weatherService.toggleUnits();
        }
        catch(error)
        {
            console.error("[WEATHER UNIT TOGGLE ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}