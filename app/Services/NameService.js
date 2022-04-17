import { ProxyState } from "../AppState.js";

function _saveName()
{
    window.localStorage.setItem("inspire_name", ProxyState.name);
}

class NameService
{
    constructor()
    {
        const loadedName = window.localStorage.getItem("inspire_name");
        if(loadedName)
        {
            ProxyState.name = loadedName;
        }
    }

    changeName(newName)
    {
        ProxyState.name = newName;
        _saveName();
    }
}

export const nameService = new NameService();