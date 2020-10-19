import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [TodosService]
})
export class FirstComponent {
  items: {}[] = [];
  selectedTodo: {} = {}
  constructor(private todosService: TodosService, private router: Router){}

  ngOnInit(){
    this.items = this.todosService.getTodos();
  }

  GotoTodo(item) {
    this.selectedTodo = item;
    this.router.navigate(['/viewtodo', item.id]);
  }
}