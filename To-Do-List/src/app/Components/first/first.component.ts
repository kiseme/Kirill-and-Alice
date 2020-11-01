import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  items: {}[] = [];// Лучше создать класс/интерфейс, но если действительно неизвестно, что там то использовать any
  selectedTodo: {} = {}  // Лучше создать класс/интерфейс, но если действительно неизвестно, что там то использовать any
  isAuth: boolean

  constructor(private todosService: TodosService){}

  ngOnInit(){
    this.items = this.todosService.getTodos();
  }

  GotoTodo(item) {
    this.todosService.GotoTodo(item)
  }

  login() {
    this.todosService.logIn()
  }
  getAuth() {
    this.isAuth = this.todosService.getAuth()
    return this.isAuth
  }

}
