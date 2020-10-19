import { Component } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: ActivatedRoute){}

  title = 'To-Do-List';
  isAuth = false
  login() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.isAuth = true
  }
}
