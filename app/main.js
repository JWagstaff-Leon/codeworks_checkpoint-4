import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { NameController } from "./Controllers/NameController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App
{
    weatherController = new WeatherController();
    nameController = new NameController();
    todosController = new TodosController();
    clockController = new ClockController();
    imageController = new ImageController();
    quoteController = new QuoteController();
}

window["app"] = new App();
