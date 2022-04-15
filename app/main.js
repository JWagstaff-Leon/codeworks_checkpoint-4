import { NameController } from "./Controllers/NameController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App
{
    weatherController = new WeatherController();
    nameController = new NameController();
    todosController = new TodosController();
}

window["app"] = new App();
