import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<app-first></app-first>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-List';
}
