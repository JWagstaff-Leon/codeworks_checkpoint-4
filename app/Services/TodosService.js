import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { bcwApi } from "./ApiService.js";

class TodosService
{
    async getAllTodos()
    {
        const res = await bcwApi.get("JoshuaWL/todos");
        ProxyState.todoList = res.data.map(todo => new Todo(todo));
    }

    async createTodo(newTodoData)
    {
        // const newTodo = new Todo(newTodoData);
        const res = await bcwApi.post("JoshuaWL/todos", newTodoData);
        ProxyState.todoList = [...ProxyState.todoList, new Todo(res.data)]
    }

    async toggleTodo(todoId)
    {
        const foundTodo = ProxyState.todoList.find(todo => todo.id === todoId);
        if(foundTodo)
        {
            foundTodo.completed = !foundTodo.completed;
        }

        const res = await bcwApi.put("JoshuaWL/todos/" + foundTodo.id, foundTodo);
        const index = ProxyState.todoList.findIndex(todo => todo.id === res.data.id);
        ProxyState.todoList.splice(index, 1, new Todo(res.data));
        ProxyState.todoList = ProxyState.todoList;
    }

    async deleteTodo(todoId)
    {
        const res = await bcwApi.delete("JoshuaWL/todos/" + todoId);
        ProxyState.todoList = ProxyState.todoList.filter(todo => todo.id != todoId);
    }
}

export const todosService = new TodosService();