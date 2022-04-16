import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _drawBackground()
{
    const bodyElem = document.getElementsByTagName("body")[0];
    bodyElem.style["background-image"] = `url("${ProxyState.imageURL}")`;
}

function _getBackground()
{
    try
    {
        imageService.getBackground();
    }
    catch(error)
    {
        console.error("[GET BACKGROUND ERROR]", error.message);
        Pop.toast(error.message, "error");
    }
}

export class ImageController
{
    constructor()
    {
        ProxyState.on("imageURL", _drawBackground);
        _getBackground();
    }
}