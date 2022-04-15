import { ProxyState } from "../AppState.js";
import { bcwApi } from "./ApiService.js";

class QuoteService
{
    async getQuote()
    {
        const res = await bcwApi.get("quotes");
        console.log(res);
        const newQuoteObj =
        {
            text: res.data.content,
            author: res.data.author
        }

        ProxyState.quote = newQuoteObj;
    }
}

export const quoteService = new QuoteService();