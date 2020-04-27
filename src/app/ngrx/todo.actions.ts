import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.selector';

export const getTodos = createAction('[TodoList Component] GetAll');
export const toggleTodoComplete = createAction('[TodoList Component] ToggleComplete', props<{id: number}>());
export const createTodo = createAction('[createTodo Component] createTodo', props<Todo>());