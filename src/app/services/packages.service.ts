import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private url: string = '/api';

  constructor(private http: HttpClient) {}

  index(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url, { responseType: 'json' });
  }
}
