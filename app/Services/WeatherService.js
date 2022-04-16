import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { bcwApi } from "./ApiService.js";

class WeatherService
{
    async getWeather()
    {
        const res = await bcwApi.get("weather");
        const newWeather = new Weather(res.data);
        ProxyState.weather = newWeather;
    }

    toggleUnits()
    {
        ProxyState.celcius = !ProxyState.celcius;
    }
}

export const weatherService = new WeatherService();