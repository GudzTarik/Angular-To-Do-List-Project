import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';

import { TodoListComponent } from './todo-list.component';

import { TodoListApiService } from '../core/services/todo-list.api.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent, MatIcon],
      imports: [
        HttpClientModule,
        MatIconTestingModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('todo items has default value', () => {
    expect(component.filteredTodoItems)
      .toEqual([]);
  });

  it('create new task mode has default value', () => {
    expect(component.createNewTaskMode)
      .toEqual(false);
  });

  it('should be created', () => {
    const service: TodoListApiService = TestBed.get(TodoListApiService);
    expect(service)
      .toBeTruthy();
  });
});
