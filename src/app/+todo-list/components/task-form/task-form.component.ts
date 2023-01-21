import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TodoItemInterface } from '../../../core/interfaces';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() private save = new EventEmitter<TodoItemInterface>();
  @Input() private todoItem: TodoItemInterface;
  public readonly categories: string[] = [
    'Work', 'Education', 'Healths',
    'Free time', 'Housework', 'Cooking',
    'Bureaucracy', 'Other'
  ];
  public filteredCategories$: Observable<string[]>
  public taskForm: FormGroup;

  public ngOnInit(): void {
    this.setTaskForm();

    this.filteredCategories$ = this.taskForm.controls.category.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterCategories(value || '')),
      );
  }

  public saveTask(): void {
    this.taskForm.markAllAsTouched();

    if (this.taskForm.valid) {
      this.save.emit(this.taskForm.value);
    }
  }

  public cancel(): void {
    this.save.emit(null);
  }

  public categoriesTrackFn = (_: number, item: string): string => item;

  private setTaskForm(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(this.todoItem?.id),
      label: new FormControl(this.todoItem?.label, Validators.required),
      description: new FormControl(this.todoItem?.description, Validators.required),
      category: new FormControl(this.todoItem?.category, Validators.required),
      done: new FormControl(this.todoItem?.done)
    });
  }

  private filterCategories(value: string): string[] {
    return this.categories.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }
}
