import { createReducer, on } from '@ngrx/store';
import { getTodos, toggleTodoComplete, createTodo } from './todo.actions';
import { Todo } from './todo.selector';
import { state } from '@angular/animations';


export const initialState = {todos: [{
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
  }]};

function toggleTodoReturnState(state:Todo[], todoId: number): Todo[] {
  // let newState = state.slice(0); // for cloning the array object
  let newState = [];
  state.map( item => {
      newState.push({
        id: item.id,
        title: item.title,
        isComplete: item.id === todoId ? !item.isComplete : item.isComplete
      });
  });

  return newState;
}

function addNewTodo(state: Todo[], todo: Todo){
    let newTodo = {
      id: state.length + 1, // create a new todo id. It's one plus current number of todos
      title: todo.title,
      isComplete: false
    }
  
    return state.concat([newTodo]);
}

const _todoReducer = createReducer(initialState,
    on(getTodos, state => {
      console.log("%cInvoked reducer", "background: lightyellow; color: purple; font-size: 14pt");
      return state ? state.todos : initialState;
    }),
    on(toggleTodoComplete, (state: Todo[], prop: {id: number}) => {
      console.log("%cInvoked reducer", "background: lightyellow; color: purple; font-size: 14pt");
      return toggleTodoReturnState(state, prop.id)
    }),
    on(createTodo, (state: Todo[], todo: Todo) => {
      console.log("%cInvoked reducer", "background: lightyellow; color: purple; font-size: 14pt");
      return addNewTodo(state, todo)
    })
    );
    
    export function todoReducer(state, action){
      return _todoReducer(state, action);
}