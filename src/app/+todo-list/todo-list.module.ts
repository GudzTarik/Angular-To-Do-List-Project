// modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// components
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './todo-list.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TodoListModule {
}
