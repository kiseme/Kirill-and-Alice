import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { ViewTodoComponent } from './Components/view-todo/view-todo.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { ItemEffects } from './store/effects/todos.effects'
import { itemReducer } from './store/reducers/todos.reducers';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ViewTodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(itemReducer),
    StoreModule.forFeature('todos', itemReducer),
    EffectsModule.forRoot([ItemEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }