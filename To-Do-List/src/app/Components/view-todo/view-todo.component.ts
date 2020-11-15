import { Component, OnInit } from '@angular/core';
import {TodosService} from '../first/todos.service'
import {ActivatedRoute} from "@angular/router"
import {AuthService} from '../first/auth.service'

interface Todo {
  name?: string,
  description?: string,
  done?: boolean,
  id?: number
}

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {
  currentId: number //Лучше использовать просто number, - ИСПРАВЛЕНО
  currentTodo: Todo // Лучше создать класс/интерфейс, но если действительно неизвестно, что там то использовать any - ИСПРАВЛЕНО
  isAuth: boolean
  constructor(private todosService: TodosService, private authService: AuthService){} //Если не используете какие-то сервисы, то лучше их убирать из конструктора - ИСПРАВЛЕНО

  ngOnInit(): void {
    this.currentTodo = this.todosService.getCurrentTodo()
    this.isAuth = this.authService.getAuth()
  }



}
