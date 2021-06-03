import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Book[] = [];
  cart$ = new BehaviorSubject(null);

  constructor() {}
  getCartItems(): Book[] {
    return this.cartItems;
  }
  addCartItem(book: Book): void {
    this.cartItems.push(book);
    this.cart$.next(this.cartItems.length);
  }
  deleteItem(id: string): void {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cart$.next(this.cartItems.length);
    }
  }
  clearItems(): void {
    this.cartItems = [];
    this.cart$.next(this.cartItems.length);
  }
}
