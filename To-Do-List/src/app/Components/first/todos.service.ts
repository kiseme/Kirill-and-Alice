import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

interface Todo {
  name?: string,
  description?: string,
  done?: boolean,
  id?: number
}

@Injectable({
  providedIn: 'root'
})

export class TodosService{

    private todos: {}[] = [ // У вас же даже есть интерфейс, используйте его, а не {}
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

    public selectedTodo:Todo

    constructor(private router: Router){}
    getTodos(): {}[] { // У вас же даже есть интерфейс, используйте его, а не {}
        return this.todos;
    }
    // Придерживайтесь camelCase для методов
    GotoTodo(item) {
      this.selectedTodo = item;
      this.router.navigate(['/viewtodo', item.id]);
    }
    // Сервисы нужно чтобы изолировать логику, поэтому все методы связанные с авторизацией нужно переместить в отдельный сервис
    logIn() {
      this.isAuth = !this.isAuth
    }

    getAuth():boolean { // Не обязательно специфицировать возвращаемое значение, если тип уже известен
      return this.isAuth
    }
    getCurrentTodo():{} { // У вас же даже есть интерфейс, используйте его, а не {}
      return this.selectedTodo
    }


}
