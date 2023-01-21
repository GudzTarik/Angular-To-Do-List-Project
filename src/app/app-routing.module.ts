import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<unknown> => import('./+todo-list/todo-list.module').then(m => m.TodoListModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
