import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly API_URL = 'http://localhost:8080/api/v1/cart';

  readonly  cartSubject=new BehaviorSubject<Cart >({cartId: '', items: [], totalPrice: 0});

  constructor(private http: HttpClient) {}

  get cart$(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  public getCart(): Observable<Cart> {
    return this.http.get<Cart>(`${this.API_URL}`).pipe(
      tap((cart) => this.cartSubject.next(cart)),
      switchMap(() => this.cartSubject.asObservable()),
    );
  }

  public addToCart(productId: string, quantity: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.API_URL}/add`, null, {
      params: {
        productId,
        quantity,
      },
    }).pipe(
      tap((cart) => this.cartSubject.next(cart)),
      switchMap(() => this.cartSubject.asObservable()),
    );
  }

  public removeFromCart(productId: string, quantity: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.API_URL}/remove`, {
      params: {
        productId,
        quantity,
      },
    }).pipe(
      tap((cart) => this.cartSubject.next(cart)),
      switchMap(() => this.cartSubject.asObservable()),
    );
  }

  public clearCart(): Observable<Cart> {
    return this.http.delete<Cart>(`${this.API_URL}/clear`);
  }
}
