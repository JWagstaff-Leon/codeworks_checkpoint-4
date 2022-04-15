import { ProxyState } from "../AppState.js";
import "../Services/ClockService.js"; //need the constructor to run, but don't need it for anything else

function _drawClock()
{
    let timeString = "";
    timeString += ProxyState.time.broken ? ProxyState.time.hour % 12 : ProxyState.time.hour;
    timeString += ":";
    timeString += ProxyState.time.minute;

    if(ProxyState.time.broken)
    {
        timeString += ProxyState.time.hour < 12 ? " AM" : " PM";
    }

    document.getElementById("clock").innerText = timeString;
}

export class ClockController
{
    constructor()
    {
        ProxyState.on("time", _drawClock);
        _drawClock();
    }
}