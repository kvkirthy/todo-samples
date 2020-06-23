import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getTodos, toggleTodoComplete } from '../ngrx/todo.actions';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as selectors from '../ngrx/todo.selector';

type Todo = {
  id: number,
  title: string,
  isComplete: boolean
};

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  ngOnInit(): void {
    this.todos$ = this.store
        .pipe(
          select(selectors.getActiveTodos),
          filter(val => val !== undefined)
        );
  }

  todos$: Observable<Todo[]>;

  sampleTodo: Todo = {
    id: 0,
    title: "test",
    isComplete: true
  };

  isAllSelected = false;

  constructor(private store: Store<{ todos: Todo[]}>) { 
    this.store.dispatch(getTodos());
  }



  toggleTodo(id: number){
    
    // // does not work
    // let aNumericVariable: number = null;
    // let aNumericVariable2: number = undefined;

    // declare a union type to let a null value set on a number variable

    let aNumericVariable3: number | null = null;
    let aNumericVariable4: number | undefined = undefined;


    this.store.dispatch(toggleTodoComplete({id}));
  }

  onShowAllClick(){
    // Toggle show all switch
    this.isAllSelected = !this.isAllSelected;

    if(this.isAllSelected){
      this.todos$ = this.store
        .pipe(
          select(selectors.getAllTodos)
        );
    } else {
      this.todos$ = this.store
        .pipe(
          select(selectors.getActiveTodos),
        );
    }
  }

}
