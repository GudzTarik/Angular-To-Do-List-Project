import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { TodoItemInterface } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class TodoListApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  public getTodoItems(): Observable<TodoItemInterface[]> {
    return this.httpClient.get<TodoItemInterface[]>(`${ environment.apiAddress }/tasks`);
  }

  public createTodoItem(data: TodoItemInterface): Observable<any> {
    return this.httpClient.post<any>(`${ environment.apiAddress }/tasks`, data);
  }

  public updateTodoItem(data: TodoItemInterface): Observable<any> {
    return this.httpClient.patch<any>(`${ environment.apiAddress }/tasks/${ data.id }`, data);
  }

  public deleteTodoItem(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${ environment.apiAddress }/tasks/${ id }`);
  }
}
