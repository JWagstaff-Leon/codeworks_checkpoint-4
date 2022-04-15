import { ProxyState } from "../AppState.js";

function _updateClock()
{
    const newTime = new Date();
    const newTimeObj = 
        {
            hour: newTime.getHours(),
            minute: newTime.getMinutes(),
            broken: ProxyState.time.broken
        }
    
    ProxyState.time = newTimeObj;

    const nextMinuteInMilliseconds = (60 - newTime.getSeconds()) * 1000 - newTime.getMilliseconds();
    setTimeout(_updateClock, nextMinuteInMilliseconds);
}

class ClockService
{
    constructor()
    {
        _updateClock();
    }

    switchFormat()
    {
        const newTimeObj = 
        {
            hour: ProxyState.time.hour,
            minute: ProxyState.time.minute,
            broken: !ProxyState.time.broken
        }
        ProxyState.time = newTimeObj;
    }
}

export const clockService = new ClockService();