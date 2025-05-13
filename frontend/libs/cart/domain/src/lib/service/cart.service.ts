import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Cart } from '../model/cart';
import { ConfigService } from '@m-org/shared-util';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly apiUrl;

  readonly cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({
    cartId: '',
    items: [],
    totalPrice: 0,
  } as Cart);

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) {
    this.apiUrl = this.config.get('API_URL') + '/api/v1/cart';
  }

  public getCart(): Observable<Cart> {
    if (!this.cartSubject.value.cartId) {
      this.http
        .get<Cart>(`${this.apiUrl}`, { withCredentials: true })
        .pipe(
          tap((cart) => this.cartSubject.next(cart)),
          catchError((error: any) => this.handleError(error)),
        )
        .subscribe();
    }
    return this.cartSubject.asObservable();
  }

  public addToCart(productId: string, quantity = 1): void {
    this.http
      .post<Cart>(`${this.apiUrl}/add`, null, {
        params: {
          productId,
          quantity,
        },
        withCredentials: true,
      })
      .pipe(
        tap((cart) => {
          this.cartSubject.next(cart);
        }),
        catchError((error) => this.handleError(error)),
      )
      .subscribe();
  }

  public removeFromCart(productId: string, quantity: number): void {
    this.http
      .post<Cart>(`${this.apiUrl}/remove`, {
        params: {
          productId,
          quantity,
        },
      })
      .pipe(
        tap((cart) => this.cartSubject.next(cart)),
        catchError((error) => this.handleError(error)),
      )
      .subscribe();
  }

  public removeAllFromCart(productId: string): void {
    this.http
      .post<Cart>(`${this.apiUrl}/remove-all`, {
        params: {
          productId,
        },
      })
      .pipe(
        tap((cart) => this.cartSubject.next(cart)),
        catchError((error) => this.handleError(error)),
      )
      .subscribe();
  }

  public clearCart(): void {
    this.http
      .post<Cart>(`${this.apiUrl}/clear`, null)
      .pipe(
        tap((cart) => this.cartSubject.next(cart)),
        catchError((error) => this.handleError(error)),
      )
      .subscribe();
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(() => ({
      status: error.status,
      message: 'Client error..',
    }));
  }
}
