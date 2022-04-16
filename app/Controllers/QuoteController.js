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

function _getQuote()
{
    try
    {
        quoteService.getQuote();
    }
    catch(error)
    {
        console.error("[GET QUOTE ERROR]", error.message);
        Pop.toast(error.message, "error");
    }
}

export class QuoteController
{
    constructor()
    {
        ProxyState.on("quote", _drawQuote);
        _getQuote();
    }
}