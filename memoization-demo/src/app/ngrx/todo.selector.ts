import { createSelector } from '@ngrx/store';

export interface Todo {
    id: number,
    title: string,
    isComplete: boolean
  };

export interface State {
    todos: Todo[]
}

export const TODOS = (state: State) => {
    return state.todos;
}

export const getActiveTodos = createSelector(
    TODOS,
    state => {
        console.log("%cInvoked getActiveTodos()", "background: skyblue; color: purple; font-size: 14pt");
        return state.filter(item => item.isComplete === false)
    }
);

export const getAllTodos = createSelector(
    TODOS,
    state => {
        console.log("%cInvoked getAllTodos()", "background: lightgreen; color: purple; font-size: 14pt");
        return state;
    }
);