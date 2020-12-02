import { getItemsState, Todo } from "../reducers/todos.reducers";
import { createSelector } from "@ngrx/store";

export const selectItems = createSelector(
    getItemsState,
    (state:Todo) => state.todos
);

export const areItemsLoaded = createSelector(
    getItemsState,
    (state:Todo) => state.loaded
);