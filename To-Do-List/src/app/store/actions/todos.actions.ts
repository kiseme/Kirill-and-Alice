import {createAction, props} from "@ngrx/store"

export const LoadItems = createAction('[First Component] Load Items'); 
export const LoadItemsSuccess = createAction('[First Component] Items loaded successfully', props<{ todos }>());

interface Todo {
    name?: string,
    description?: string,
    done?: boolean,
    id?: number
  }