import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { TodoItemInterface } from '../../../core/interfaces';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Output() public update = new EventEmitter<TodoItemInterface>();
  @Output() public delete = new EventEmitter<void>();

  @Input() public todoItem: TodoItemInterface;

  public editTaskMode = false;

  public markAsDone(event: boolean): void {
    this.todoItem.done = event;
    this.update.emit(this.todoItem);
  }

  public deleteTodoItem(): void {
    this.delete.emit();
  }

  public toggleTaskForm(): void {
    this.editTaskMode = !this.editTaskMode;
  }

  public editTask(todoItem: TodoItemInterface): void {
    if (todoItem) {
      this.todoItem = todoItem;
      this.update.emit(todoItem);
    }

    this.toggleTaskForm();
  }
}
