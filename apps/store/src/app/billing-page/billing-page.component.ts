import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { Collection } from '../collection.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakBarComponent } from '../snak-bar/snak-bar.component';
import { BooksFacadeService } from '../books-facade.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css'],
})
export class BillingPageComponent implements OnInit {
  isValid = true;
  books: Book[] = [];
  collection: Collection;
  isCart = false;
  billingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private booksFacadeService: BooksFacadeService
  ) {}

  ngOnInit(): void {
    this.booksFacadeService.getAllCartItems$.subscribe(
      (result) => (this.books = result)
    );
    this.booksFacadeService.isCart$.subscribe(
      (isCart) => (this.isCart = isCart)
    );
  }
  onSubmit(name: string, email: string, phone: number, address: string): void {
    if (this.isCart) {
      this.books.forEach((book) => {
        this.collection = {
          title: book?.title || '',
          imgLink: book?.imageLink || '',
          description: book?.description || '',
          authors: book?.authors || '',
          name: name || '',
          email: email || '',
          phone: phone || 0,
          address: address || '',
        };
        this.booksFacadeService.addCollection(this.collection);
      });
      this.booksFacadeService.clearItems();
    } else {
      this.booksFacadeService.getBookInCollection$.subscribe((book) => {
        this.collection = {
          title: book?.title || '',
          imgLink: book?.imageLink || '',
          description: book?.description || '',
          authors: book?.authors || '',
          name: name || '',
          email: email || '',
          phone: phone || 0,
          address: address || '',
        };
      });
      this.booksFacadeService.addCollection(this.collection);
    }
    this.snackBar.openFromComponent(SnakBarComponent, {
      duration: 2000,
      panelClass: 'blue-snackbar',
    });
  }
}
