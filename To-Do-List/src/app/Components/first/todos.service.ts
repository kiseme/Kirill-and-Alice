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

    private todos: Todo[] = [ // У вас же даже есть интерфейс, используйте его, а не {} - ИСПРАВЛЕНО
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
    

    public selectedTodo:Todo

    constructor(private router: Router){}
    getTodos(): Todo[] { // У вас же даже есть интерфейс, используйте его, а не {} - ИСПРАВЛЕНО
        return this.todos;
    }
    // Придерживайтесь camelCase для методов - ИСПРАВЛЕНО
    gotoTodo(item) {
      this.selectedTodo = item;
      this.router.navigate(['/viewtodo', item.id]);
    }
  
    getCurrentTodo():Todo { // У вас же даже есть интерфейс, используйте его, а не {} - ИСПРАВЛЕНО
      return this.selectedTodo
    }

    addNewTodo(name, description) {
      this.todos.push({
        name: name,
        description: description,
        done: false,
        id: this.todos.length
      })
      
    }


}
