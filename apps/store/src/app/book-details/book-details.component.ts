import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';
import { MycollectionService } from '../mycollection.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  id: string;
  bookDetails: Book;
  subscriptions: Subscription[] = [];

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private myCollectionService: MycollectionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.subscriptions.push(
      this.booksService.books$.subscribe((response) => {
        this.bookDetails = response;
      })
    );
  }
  addToCart(): void {
    this.cartService.addCartItem(this.bookDetails);
  }
  buyNow(): void {
    this.myCollectionService.mycollection$.next(this.bookDetails);
    this.router.navigate(['/billingpage']);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
