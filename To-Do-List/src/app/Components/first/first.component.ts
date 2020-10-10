import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  template: `<ul>
                  <li *ngFor="let item of items">{{item}}</li>
                </ul>`  
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
