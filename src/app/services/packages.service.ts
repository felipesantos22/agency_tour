import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private url: string = '/api';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  index(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url).pipe(retry(2));
  }
}
