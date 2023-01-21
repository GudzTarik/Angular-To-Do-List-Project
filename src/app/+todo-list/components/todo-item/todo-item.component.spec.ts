import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../../../shared/shared.module';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent, MatIcon],
      imports: [SharedModule, MatIconTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todoItem = {
      label: 'test label',
      description: 'test description',
      category: 'test category',
      id: 11,
      done: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('edit task mode has default value', () => {
    expect(component.editTaskMode)
      .toEqual(false);
  });

  it('toggle task form should change editTaskMode value', () => {
    component.toggleTaskForm();
    expect(component.editTaskMode)
      .toEqual(true);
  });

  it('should emit on delete', () => {
    spyOn(component.delete, 'emit');
    component.deleteTodoItem();
    expect(component.delete.emit)
      .toHaveBeenCalled();
  });

  it('should have content in description', () => {
    const description = fixture.debugElement.query(By.css('.description')).nativeElement;
    expect(description.innerHTML)
      .not
      .toBeNull();
    expect(description.innerHTML.length)
      .toBeGreaterThan(0);
  });
});
