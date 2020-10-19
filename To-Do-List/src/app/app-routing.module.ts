import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './Components/first/first.component'
import { ViewTodoComponent } from './Components/view-todo/view-todo.component'
import { StatusComponent } from './Components/status/status.component'
import { FirstGuard } from './first.guard'
const routes: Routes = [
  {
    path: '',
    component: FirstComponent
  },
  {
    path: 'viewtodo/:id',
    component: ViewTodoComponent
  },
  {
    path: 'status',
    component: StatusComponent,
    canActivate: [FirstGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
