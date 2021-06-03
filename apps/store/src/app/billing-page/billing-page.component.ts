import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Book } from '../book.model';
import { CartService } from '../cart.service';
import { Collection } from '../collection.model';
import { MycollectionService } from '../mycollection.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakBarComponent } from '../snak-bar/snak-bar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css'],
})
export class BillingPageComponent implements OnInit, OnDestroy {
  isValid = true;
  books: Book[] = [];
  collection: Collection;
  isCart = false;
  subscriptions: Subscription[] = [];
  billingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private mycollectionService: MycollectionService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.mycollectionService.mycollection$.subscribe((res) => {
        if (Array.isArray(res)) {
          this.isCart = true;
          res.forEach((book) => {
            this.books.push(book);
          });
        } else {
          this.isCart = false;
          this.books.push(res);
        }
      })
    );
  }
  onSubmit(name: string, email: string, phone: number, address: string): void {
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
      this.mycollectionService.addCollection(this.collection);
      if (this.isCart) {
        this.cartService.clearItems();
      }
      this.snackBar.openFromComponent(SnakBarComponent, {
        duration: 2000,
        panelClass: 'blue-snackbar',
      });
      return true;
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
