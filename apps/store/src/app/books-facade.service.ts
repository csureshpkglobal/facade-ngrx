import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as cartActions from '../app/ngrx-store/cart.actions';
import * as collectionActions from '../app/ngrx-store/collection.actions';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Collection } from './collection.model';

@Injectable({
  providedIn: 'root',
})
export class BooksFacadeService {
  //Cart Store
  getAllItems$ = this.store.select((state) => state.cart.items);
  getAllCartItems$ = this.store.select((state) => state.cart.cartItems);
  getSelectedItem$ = this.store.select(
    (state) => state.cart.items[state.cart.selectedId]
  );
  isCart$ = this.store.select((state) => state.cart.isCart);
  searchWord$ = this.store.select((state) => state.cart.searchWord);

  //Collection store
  getBookInCollection$ = this.store.select((state) => state.collection.book);
  getAllCollections$ = this.store.select(
    (state) => state.collection.collections
  );

  constructor(private store: Store<fromApp.AppState>) {}

  getBooksByName(search: string) {
    this.store.dispatch(new cartActions.GetBooksByName(search));
  }
  setSelectedId(id: number) {
    this.store.dispatch(new cartActions.SelectedId(id));
  }
  addCartItem(book: Book) {
    this.store.dispatch(new cartActions.AddCartItem(book));
  }
  updateCart(flag: boolean) {
    this.store.dispatch(new cartActions.IsCart(flag));
  }
  deleteItem(id: string) {
    this.store.dispatch(new cartActions.DeletCartItem(id));
  }
  clearItems() {
    this.store.dispatch(new cartActions.ClearCart());
  }

  //Collection API
  addBook(book: Book) {
    this.store.dispatch(new collectionActions.AddBook(book));
  }
  addCollection(collection: Collection) {
    this.store.dispatch(new collectionActions.AddCollection(collection));
  }
}
