import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {AddTodoComponent} from '../add-todo/add-todo.component';
import {AuthService} from './auth.service'
import {State, Store} from "@ngrx/store";
import {LoadItems} from "../../store/actions/todos.actions";
import { Todo } from "../../store/reducers/todos.reducers";

// interface Todo {
//   name?: string,
//   description?: string,
//   done?: boolean,
//   id?: number
// }

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  items: Todo[] = [];// Лучше создать класс/интерфейс, но если действительно неизвестно, что там то использовать any - ИСПРАВЛЕНО
  // selectedTodo: Todo = {}  // Лучше создать класс/интерфейс, но если действительно неизвестно, что там то использовать any - ИСПРАВЛЕНО
  isAuth: boolean

  constructor(private todosService: TodosService, private authService: AuthService, private store:Store<Todo>){}

  ngOnInit(){
    this.store.dispatch(LoadItems())
    // this.items = this.todosService.getTodos();
  }

  GotoTodo(item) {
    this.todosService.gotoTodo(item)
  }

  login() {
    this.authService.logIn()
  }
  getAuth() {
    this.isAuth = this.authService.getAuth()
    return this.isAuth
  }

}
