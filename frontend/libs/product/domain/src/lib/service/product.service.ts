import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'http://localhost:8080/api/v1/products';

  constructor(private http: HttpClient) {}
  getProducts(
    page: number,
    size: number,
    sort?: string,
    direction?: string,
  ): Observable<Page<Product>> {
    return this.http.get<Page<Product>>(
      `${this.API_URL}?page=${page}&size=${size}&sortBy=${sort}&sortDirection=${direction}`,
    );
  }
}
