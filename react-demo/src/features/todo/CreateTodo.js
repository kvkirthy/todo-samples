import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {
    createTodo
} from './todoSlice';
import styles from './Todo.module.css';

export function CreateTodo(){

    let [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    const dispatchNewTodo = () => {
        dispatch(createTodo(todoText));
    }

    return (
     <div >
        <div className={styles.padded}>
         Provide todo below,
        </div>
        <input type="text" 
            value={todoText} 
            className={styles.textbox}
            onChange={(evt) => setTodoText(evt.target.value)}
            
           />             
            
            <button 
                className={styles.button}
                onClick={dispatchNewTodo}                
            >
                Go
            </button>
     </div>
    )

}