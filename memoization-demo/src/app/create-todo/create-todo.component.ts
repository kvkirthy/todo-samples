import { Component, OnInit } from '@angular/core';
import { Todo } from '../ngrx/todo.selector';
import { Store } from '@ngrx/store';
import { createTodo } from '../ngrx/todo.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todoText: string = "";

  constructor(private store: Store<Todo>) { }

  ngOnInit(): void {
  }

  createClick(){
    this.store.dispatch(createTodo ({
      id: 0,
      title: this.todoText,
      isComplete: false
    }));

  }

}
