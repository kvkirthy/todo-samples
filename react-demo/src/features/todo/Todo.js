import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getTodos,
    setShouldIncludeComplete,
    toggleTodoComplete
    // createTodo
} from './todoSlice';
import { CreateTodo } from './CreateTodo';
import styles from './Todo.module.css';

export function Todo() {    

    let todos = useSelector(getTodos);
    const dispatch = useDispatch();

    const getTodosByStatus = (includeCompletedTodos) => {            
        dispatch(setShouldIncludeComplete(includeCompletedTodos));
    };

    const renderTodo= (todo) => <div className={styles.row} key={'div' + todo.id}>
         <input type="checkbox" key={todo.id} onChange={ () => {
             console.log(todo.id);
             dispatch(toggleTodoComplete(todo.id));             
            }
         }/>
         {todo.title} 
        </div>;        

    return (<div className={styles.padded}> 
        <CreateTodo />
        <button className={styles.button} onClick={() => getTodosByStatus(true)}>
            Include completed todos
        </button>
        <button className={styles.button} onClick={() => getTodosByStatus(false)}>
            Exclude completed todos
        </button>
        {todos.map(element => renderTodo(element))} 
    </div>);
}