import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodosService{

    private todos: {}[] = [
        {
          name: 'Buy milk',
          description: 'Go to shop and buy milk',
          done: false,
          id: 0
        },
        {
          name: 'Buy bread',
          description: 'Go to shop and buy bread',
          done: false,
          id: 1
        }
      ];
    private isAuth = false
    public selectedTodo: {} = {}

    constructor(private router: Router){}
    getTodos(): {}[] {
        return this.todos;
    }
    GotoTodo(item) {
      this.selectedTodo = item;
      this.router.navigate(['/viewtodo', item.id, {isAuth: this.isAuth}]);
    }

    logIn() {
      this.isAuth = !this.isAuth
    }

    getAuth():boolean {
      return this.isAuth
    }


}