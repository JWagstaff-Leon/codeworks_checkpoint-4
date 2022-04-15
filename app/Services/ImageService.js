import { ProxyState } from "../AppState.js";
import { bcwApi } from "./ApiService.js";

class ImageService
{
    async getBackground()
    {
        const res = await bcwApi.get("images");
        ProxyState.imageURL = res.data.largeImgUrl;
    }
}

export const imageService = new ImageService();