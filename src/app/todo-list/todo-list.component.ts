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

  isAllSelected = false;

  constructor(private store: Store<{ todos: Todo[]}>) { 
    this.store.dispatch(getTodos());
  }



  toggleTodo(id: number){
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
