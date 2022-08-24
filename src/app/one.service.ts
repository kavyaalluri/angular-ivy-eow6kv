import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class OneService {
  constructor(private http: HttpClient) {}

  public Url: string = 'https://jsonplaceholder.typicode.com/users';
  getData(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.Url);
  }
}
