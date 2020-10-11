import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']  
})
export class FirstComponent {
  title = 'To Do List';
  todos = [
    {
      name: 'Buy milk',
      description: 'Go to shop and buy milk',
      done: false
    },
    {
      name: 'Buy bread',
      description: 'Go to shop and buy bread',
      done: false
    }
  ]
}
