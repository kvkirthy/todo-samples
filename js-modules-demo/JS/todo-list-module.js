export const getTodosMarkup = (todos) => {
    let todoElement = "";
    for (let item of todos) {
        todoElement = `${todoElement} <div> <input type="checkbox" id="${item.id}" /> ${item.title}</div>`;
    }

    return todoElement;
};