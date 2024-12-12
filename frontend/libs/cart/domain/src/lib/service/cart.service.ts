import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly API_URL = 'http://localhost:8080/api/v1/cart';

  constructor(private http: HttpClient) {}

  public getCart(): Observable<Cart> {
    return this.http.get<Cart>(`${this.API_URL}`);
  }

  public addToCart(productId: string, quantity: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.API_URL}/add`, null, {
      params: {
        productId,
        quantity,
      },
    });
  }

  public removeFromCart(productId: string, quantity: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.API_URL}/remove`, {
      params: {
        productId,
        quantity,
      },
    });
  }

  public clearCart(): Observable<Cart> {
    return this.http.delete<Cart>(`${this.API_URL}/clear`);
  }
}
