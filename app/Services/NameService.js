import { ProxyState } from "../AppState.js";

class NameService
{
    changeName(newName)
    {
        ProxyState.name = newName;
    }
}

export const nameService = new NameService();