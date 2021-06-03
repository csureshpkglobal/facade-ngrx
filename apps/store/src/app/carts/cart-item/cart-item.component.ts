import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../book.model';
import { BooksFacadeService } from '../../books-facade.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  cartItems$: Observable<Book[]>;
  constructor(
    private router: Router,
    private booksFacadeService: BooksFacadeService
  ) {}

  ngOnInit(): void {
    this.cartItems$ = this.booksFacadeService.getAllCartItems$;
  }
  deleteItem(id: string): void {
    this.booksFacadeService.deleteItem(id);
  }
  proceedToCheckout(): void {
    this.booksFacadeService.updateCart(true);
    this.router.navigate(['/billingpage']);
  }
}
