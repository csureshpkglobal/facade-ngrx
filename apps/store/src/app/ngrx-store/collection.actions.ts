import { Action } from '@ngrx/store';
import { Book } from '../book.model';
import { Collection } from '../collection.model';

export const ADD_COLLECTION = 'ADD_COLLECTION';
export const ADD_BOOK = 'ADD_BOOK';

export class AddCollection implements Action {
  readonly type = ADD_COLLECTION;
  constructor(public payload: Collection) {}
}
export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Book) {}
}

export type CollectionActions = AddCollection | AddBook;
