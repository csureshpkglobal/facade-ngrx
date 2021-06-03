import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../book.model';
import { CartService } from '../../cart.service';
import { MycollectionService } from '../../mycollection.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  cartItems: Book[] = [];
  constructor(
    private cartService: CartService,
    private mycollectionService: MycollectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  deleteItem(id: string): void {
    this.cartService.deleteItem(id);
  }
  proceedToCheckout(): void {
    this.mycollectionService.mycollection$.next(this.cartItems);
    this.router.navigate(['/billingpage']);
  }
}
