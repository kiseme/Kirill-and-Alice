import { Component, OnInit } from '@angular/core';
import {TodosService} from '../first/todos.service'
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss'],
  providers: [TodosService]
})
export class ViewTodoComponent implements OnInit {
  currentId: Number
  currentTodo: {}
  isAuth: boolean
  constructor(private todosService: TodosService, private readonly activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id => {
      this.getCurrentTodo(id.id)
      this.isAuth = id.isAuth
    })
  }

  getCurrentTodo(id) {
    let todos = this.todosService.getTodos()
    for (let i in todos) {
      if (todos[i].id.toString() === id) {
        this.currentTodo = todos[i]
      }
    }
  }
  

}
