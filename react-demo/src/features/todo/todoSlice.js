import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{
                id: 1,
                title: "Buy milk",
                isComplete: false
            },
            {
                id: 2,
                title: "Buy Butter",
                isComplete: true
            },
            {
                id: 3,
                title: "Get car serviced",
                isComplete: false
            }
        ]
    },
    reducers: {
        toggleTodoComplete: (state, action) => {
            console.log("state", state);
            let todo = state.todos.find(item => item.id === action.payload);
            let todoIndex = state.todos.findIndex(item => item.id === action.payload);
            todo.isComplete = true;
            state.todos[todoIndex] = todo;
            // return state.todos;
        },
        createTodo: (state, action) => {
            state.todos.push({
                id: state.todos.length + 1,
                title: action.payload,
                isComplete: false
            });
        },
        setShouldIncludeComplete: (state, action) => {
            state.shouldIncludeComplete = (action.payload);
        }
    }
});

export const { toggleTodoComplete, createTodo, setShouldIncludeComplete } = todoSlice.actions;

export const getAllTodos = state => state.todo.todos;
export const showActiveTodos = state => state.todo.shouldIncludeComplete;

export const getTodos = createSelector([getAllTodos, showActiveTodos], (todos, showActiveTodos) => {
    console.log("%cInvoked selector", "background: lightyellow; color: purple; font-size: 14pt", );
    return showActiveTodos ? todos : todos.filter(item => !item.isComplete);
});

export default todoSlice.reducer;