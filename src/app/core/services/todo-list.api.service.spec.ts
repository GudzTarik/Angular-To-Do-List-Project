import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TodoListApiService } from './todo-list.api.service';

describe('TodoListApiService testing', () => {
  let service: TodoListApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoListApiService);

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service)
      .toBeTruthy();
  });

  it('getData should use GET to retrieve data', () => {
    service.getTodoItems()
      .subscribe();

    const apiUrl = 'http://localhost:3000/tasks';
    const testRequest = httpTestingController.expectOne(apiUrl);

    expect(testRequest.request.method)
      .toEqual('GET');
  });
});
