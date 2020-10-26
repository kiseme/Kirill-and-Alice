import { Component, OnInit } from '@angular/core';
import {TodosService} from '../first/todos.service'
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {
  currentId: Number
  currentTodo: {}
  isAuth: boolean
  constructor(private todosService: TodosService, private readonly activatedRoute: ActivatedRoute){}

  ngOnInit(): void {    
    this.currentTodo = this.todosService.getCurrentTodo()
    this.isAuth = this.todosService.getAuth()
  }

  

}
