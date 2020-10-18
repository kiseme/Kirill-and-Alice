export class TodosService{
  
    private todos: {}[] = [
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
      ];

    public selectedTodo: {} = {}
      
    getTodos(): {}[] {
          
        return this.todos;
    }


}