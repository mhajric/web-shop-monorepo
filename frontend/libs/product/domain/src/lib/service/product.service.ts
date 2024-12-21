import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Product } from '../model/product';
import { ConfigService } from '@m-org/shared-util';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl;

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) {
    this.apiUrl = this.config.get('API_URL') + '/api/v1/products';
  }

  getProducts(
    page: number,
    size: number,
    sort?: string,
    direction?: string,
  ): Observable<Page<Product>> {
    return this.http.get<Page<Product>>(
      `${this.apiUrl}?page=${page}&size=${size}&sortBy=${sort}&sortDirection=${direction}`,
    );
  }
}
