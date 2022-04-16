import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import { Pop } from "../Utils/Pop.js";

function _drawClock()
{
    let timeString = "";
    // requisite nested ternary
    timeString += ProxyState.brokenTime ? ProxyState.time.hour % 12 : ( ProxyState.time.hour < 10 ? "0" + ProxyState.time.hour : ProxyState.time.hour);
    timeString += ":";
    timeString += ProxyState.time.minute < 10 ? "0" + ProxyState.time.minute : ProxyState.time.minute;
    if(ProxyState.brokenTime)
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
        ProxyState.on("brokenTime", _drawClock);
        _drawClock();
    }

    switchFormat()
    {
        try
        {
            clockService.switchFormat();
        }
        catch(error)
        {
            console.error("[CLOCK SWITCH FORMAT ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}