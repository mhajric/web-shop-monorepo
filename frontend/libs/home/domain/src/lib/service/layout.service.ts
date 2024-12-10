import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '../model/layout';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly API_URL = 'http://localhost:8080/api/v1/home/index-layout';
  constructor(private http: HttpClient) {}

  getIndexLayout(): Observable<Layout[]> {
    return this.http.get<Layout[]>(this.API_URL);
  }
}
