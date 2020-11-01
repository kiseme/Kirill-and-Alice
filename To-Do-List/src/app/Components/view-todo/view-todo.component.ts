import { Component, OnInit } from '@angular/core';
import {TodosService} from '../first/todos.service'
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {
  currentId: Number //Лучше использовать просто number,
  currentTodo: {} // Лучше создать класс/интерфейс, но если действительно неизвестно, что там то использовать any
  isAuth: boolean
  constructor(private todosService: TodosService, private readonly activatedRoute: ActivatedRoute){} //Если не используете какие-то сервисы, то лучше их убирать из конструктора

  ngOnInit(): void {
    this.currentTodo = this.todosService.getCurrentTodo()
    this.isAuth = this.todosService.getAuth()
  }



}
