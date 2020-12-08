import { Injectable } from "@angular/core";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType} from "@ngrx/effects"
import { LoadItems, LoadItemsSuccess } from '../actions/todos.actions';
import { TodosService } from "../../Components/first/todos.service";

@Injectable()
export class ItemEffects {
	loadItems$ = createEffect(() => this.actions$.pipe(
		ofType(LoadItems),
		mergeMap(() => this.todosService.getItemAsObs()
			.pipe(
				map( items => {
					console.log('run loaded successfuly', items);
					
					return LoadItemsSuccess({todos:items})
				}),
			catchError(() => EMPTY)
    ))));

constructor(
	private actions$: Actions,
	private todosService: TodosService
	) {}
}