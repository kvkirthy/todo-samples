import getData from './data-module.js';
import { getTodosMarkup } from './todo-list-module.js';

let list = getData();

document.getElementById("todos").innerHTML = getTodosMarkup(list.todos);

let isList = true;

const CREATE_TODO_URL = 'create-todo';

const handler = () => {
    import (`./${CREATE_TODO_URL}.js`).then((module) => {
        if (isList) {
            isList = false;
            document.getElementById("title").innerHTML = "Create Todo | <a href=\"#\" id=\"btnCreateTodo\">List Todos</a>";
            document.getElementById("todos").innerHTML = "";
            document.getElementById("createTodo").innerHTML = module.createTodo();
            document
                .getElementById("btnCreateTodo")
                .addEventListener("click", handler);
        } else {
            isList = true;
            document.getElementById("title").innerHTML = "List Todo | <a href=\"#\" id=\"btnCreateTodo\">Create Todos</a>";
            document.getElementById("createTodo").innerHTML = "";
            document.getElementById("todos").innerHTML = getTodosMarkup(list.todos);
            document
                .getElementById("btnCreateTodo")
                .addEventListener("click", handler);
        }
    });
}

const asyncHandler = async() => {
    if (isList) {
        isList = false;
        let module = await
        import ('./create-todo.js')
        document.getElementById("title").innerHTML = "Create Todo | <a href=\"#\" id=\"btnCreateTodo\">List Todos</a>";
        document.getElementById("todos").innerHTML = "";
        document.getElementById("createTodo").innerHTML = module.createTodo();
        document
            .getElementById("btnCreateTodo")
            .addEventListener("click", handler);
    } else {
        isList = true;
        document.getElementById("title").innerHTML = "List Todo | <a href=\"#\" id=\"btnCreateTodo\">Create Todos</a>";
        document.getElementById("createTodo").innerHTML = "";
        document.getElementById("todos").innerHTML = getTodosMarkup(list.todos);
        document
            .getElementById("btnCreateTodo")
            .addEventListener("click", handler);
    }
}

document
    .getElementById("btnCreateTodo")
    .addEventListener("click", asyncHandler);