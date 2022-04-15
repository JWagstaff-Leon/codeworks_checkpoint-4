import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import { Pop } from "../Utils/Pop.js";

function _drawClock()
{
    let timeString = "";
    timeString += ProxyState.time.broken ? ProxyState.time.hour % 12 : ProxyState.time.hour;
    timeString += ":";
    timeString += ProxyState.time.minute < 10 ? "0" + ProxyState.time.minute : ProxyState.time.minute;
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