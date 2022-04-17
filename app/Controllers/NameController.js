import { ProxyState } from "../AppState.js";
import { nameService } from "../Services/NameService.js";
import { Pop } from "../Utils/Pop.js";

function _drawName()
{
    if(typeof ProxyState.name === "string" && ProxyState.name.length > 0)
    {
        document.getElementById("name-span").innerText = ProxyState.name;
    }
    else
    {
        document.getElementById("name-span").innerText = "";
    }
}

function _drawGreeting()
{
    let greetingTemplate = "";
    if(ProxyState.time.hour < 12)
    {
        greetingTemplate = "Good morning";
    }
    else if(ProxyState.time.hour === 12 && ProxyState.time.minute === 0)
    {
        greetingTemplate = "Good noon";
    }
    else if(ProxyState.time.hour < 15)
    {
        greetingTemplate = "Good afernoon";
    }
    else if(ProxyState.time.hour < 18)
    {
        greetingTemplate = "Good preevening";
    }
    else if(ProxyState.time.hour < 21)
    {
        greetingTemplate = "Good evening";
    }
    else
    {
        greetingTemplate = "Good night";
    }

    if(typeof ProxyState.name === "string" && ProxyState.name.length > 0)
    {
        greetingTemplate += ", ";
    }
    document.getElementById("greeting").innerText = greetingTemplate;
}

export class NameController
{
    constructor()
    {
        ProxyState.on("name", _drawName);
        ProxyState.on("name", _drawGreeting);
        ProxyState.on("time", _drawGreeting);
        _drawGreeting()
        _drawName();
    }

    selectName()
    {
        document.getElementById("name-input").value = "";
        document.getElementById("name-span").classList.add("d-none");
        document.getElementById("name-input").classList.remove("d-none");
        document.getElementById("name-input").focus();
    }

    changeName()
    {
        try
        {
            const newName = document.getElementById("name-input").value;
            nameService.changeName(newName);
            document.getElementById("name-span").classList.remove("d-none");
            document.getElementById("name-input").classList.add("d-none");
        }
        catch(error)
        {
            console.error("[EDIT NAME ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}