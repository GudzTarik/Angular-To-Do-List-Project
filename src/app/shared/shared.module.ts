// modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListRoutingModule } from '../+todo-list/todo-list-routing.module';
import { MaterialModule } from './modules/material.module';

// components
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    MaterialModule,
    TodoListRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    ConfirmationDialogComponent
  ]
})
export class SharedModule {
}
