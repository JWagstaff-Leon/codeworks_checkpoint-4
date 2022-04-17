import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { bcwApi } from "./ApiService.js";

function _saveUnits()
{
    window.localStorage.setItem("inspire_celcius", ProxyState.celcius);
}

class WeatherService
{
    constructor()
    {
        const loadedUnits = window.localStorage.getItem("inspire_celcius");
        if(loadedUnits)
        {
            ProxyState.celcius = loadedUnits === "true" ? true : false;
        }
    }

    async getWeather()
    {
        const res = await bcwApi.get("weather");
        const newWeather = new Weather(res.data);
        ProxyState.weather = newWeather;
    }

    toggleUnits()
    {
        ProxyState.celcius = !ProxyState.celcius;
        _saveUnits();
    }
}

export const weatherService = new WeatherService();