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

    public selectedTodo: {} = {}
      
    getTodos(): {}[] {
          
        return this.todos;
    }


}