import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote()
{
    const quoteTemplate = 
    `
    <span>${ProxyState.quote.text}</span>
    <span class="on-hover">${ProxyState.quote.author}</span>
    `;

    document.getElementById("quote").innerHTML = quoteTemplate;
}

export class QuoteController
{
    constructor()
    {
        ProxyState.on("quote", _drawQuote);
        quoteService.getQuote();
    }
}