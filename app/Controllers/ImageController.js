import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _drawBackground()
{
    const bodyElem = document.getElementsByTagName("body")[0];
    bodyElem.style["background-image"] = `url("${ProxyState.imageURL}")`;
}

export class ImageController
{
    constructor()
    {
        ProxyState.on("imageURL", _drawBackground);
        imageService.getBackground();
    }
}