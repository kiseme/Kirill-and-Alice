import { createFeatureSelector, createReducer, on} from "@ngrx/store";
import { LoadItems, LoadItemsSuccess } from '../actions/todos.actions';

export const itemFeatureKey = 'todos';

export interface Todo {
  todos: {
    name?: string,
    description?: string,
    done?: boolean,
    id?: number
  }[],
  loaded: boolean
}

export const initialState: Todo = {
	todos: [
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
      ],
	loaded: false
}

const _todoReducer = createReducer(
	initialState,
	on(LoadItems, state => {
    console.log('load items reducer');
    
	   return { ...state, loaded: false }
  }),
  on (LoadItemsSuccess, (state, action) => {
      return {...state, todos: action.todos, loaded: true}
  })
);

export function itemReducer(state: Todo, action) {
	return _todoReducer(state, action);
}

export const getItemsState = createFeatureSelector(itemFeatureKey);