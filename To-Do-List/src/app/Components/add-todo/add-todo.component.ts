import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodosService } from '../first/todos.service'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {

  addTodo:FormGroup

  constructor(private todoService: TodosService) {
    this.addTodo = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoService.addNewTodo(this.addTodo.value.name, this.addTodo.value.description);
  }

}
