import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged, filter, switchMap,
  takeUntil
} from 'rxjs/operators';

import { TodoItemInterface } from '../core/interfaces';

import { TodoListApiService } from '../core/services/todo-list.api.service';
import {
  ConfirmationDialogComponent
} from '../shared/components/dialogs/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  public searchFormControl: FormControl;
  public filteredTodoItems: TodoItemInterface[] = [];
  public todoItems: TodoItemInterface[] = [];
  public createNewTaskMode = false;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly todoListApiService: TodoListApiService,
              private readonly dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.getTodoItems();
    this.setSearchFormControl();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public toggleCreateTaskForm(): void {
    this.createNewTaskMode = !this.createNewTaskMode;
  }

  public addTask(todoItem: TodoItemInterface): void {
    if (todoItem) {
      this.todoListApiService.createTodoItem(todoItem)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.getTodoItems();
        });
    }
    this.toggleCreateTaskForm();
  }

  public updateTodoItem(todoItem: TodoItemInterface): void {
    this.todoListApiService.updateTodoItem(todoItem)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe();
  }

  public deleteTodoItem(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Are you sure you want to delete the task?'
      },
      width: '600px',
      maxWidth: '80vw'
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result) => !!result),
        switchMap(() => this.todoListApiService.deleteTodoItem(id)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.getTodoItems();
      });
  }

  private getTodoItems(): void {
    this.todoListApiService.getTodoItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(todoItems => {
        this.todoItems = todoItems;
        this.filteredTodoItems = todoItems;
      });
  }

  public todoItemsTrackFn = (_: number, item: TodoItemInterface): number => item.id;

  private setSearchFormControl(): void {
    this.searchFormControl = new FormControl(null);

    this.searchFormControl.valueChanges
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(value => {
        this.filteredTodoItems = this.filterTodoItems(value);
      });
  }

  private filterTodoItems(searchTerm: string): TodoItemInterface[] {
    return this.todoItems.filter(item => item.description.toLowerCase()
      .includes(searchTerm.toLowerCase()));
  }
}
