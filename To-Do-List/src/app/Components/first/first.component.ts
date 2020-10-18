import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [TodosService]
})
export class FirstComponent {
  items: {}[] = [];
  constructor(private todosService: TodosService){}
  ngOnInit(){
    this.items = this.todosService.getTodos();
  }
}