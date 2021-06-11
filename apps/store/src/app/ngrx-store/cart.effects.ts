import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, EffectsFeatureModule, ofType } from '@ngrx/effects';
import { Effect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as cartActions from '../ngrx-store/cart.actions';
import * as fromCart from '../ngrx-store/cart.reducer';

export interface Book {
  id: string;
  title: string;
  imageLink: string;
  description: string;
  authors: string;

  ratingsCount: string;
  publisher: string;
  pageCount: string;
  language: string;
}

@Injectable()
export class CartEffects {
  getBooksByName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartActions.GET_BOOKSBYNAME),
      switchMap((bookData: cartActions.GetBooksByName) => {
        return this.httpClient
          .get<Book[]>('http://localhost:3000/api/books/' + bookData.payload)
          .pipe(
            map((res: any) => {
              const books = res || [];
              return new cartActions.AddBooks({ books });
            }),
            catchError((errorRes) => {
              return of(errorRes);
            })
          );
      })
    );
  });
  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
