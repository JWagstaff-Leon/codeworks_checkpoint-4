import { ProxyState } from "../AppState.js";

function _updateClock()
{
    const newTime = new Date();
    const newTimeObj = 
        {
            hour: newTime.getHours(),
            minute: newTime.getMinutes()
        }
    
    ProxyState.time = newTimeObj;

    const nextMinuteInMilliseconds = (60 - newTime.getSeconds()) * 1000 - newTime.getMilliseconds();
    setTimeout(_updateClock, nextMinuteInMilliseconds);
}

function _saveFormat()
{
    window.localStorage.setItem("inspire_timeFormat", ProxyState.brokenTime);
}

class ClockService
{
    constructor()
    {
        const loadedFormat = window.localStorage.getItem("inspire_timeFormat");
        if(loadedFormat)
        {
            ProxyState.brokenTime = loadedFormat === "true" ? true : false;
        }
        _updateClock();
    }

    switchFormat()
    {
        ProxyState.brokenTime = !ProxyState.brokenTime;
        _saveFormat();
    }
}

export const clockService = new ClockService();