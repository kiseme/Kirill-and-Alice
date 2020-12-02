import {createAction, props} from "@ngrx/store"
export const LoadItems = createAction('[App Component] Load Items'); 
export const LoadItemsSuccess = createAction('[App Component] Items loaded successfully', props<{ items:Todo[] }>());

interface Todo {
    name?: string,
    description?: string,
    done?: boolean,
    id?: number
  }