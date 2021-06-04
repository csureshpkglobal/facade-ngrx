import { Book } from '../book.model';
import { Collection } from '../collection.model';
import * as CollectionActions from './collection.actions';

export interface State {
  collections: Collection[];
  book: Book;
}

export const initialState: State = {
  collections: [],
  book: null,
};

export function collectionReducer(
  state: State = initialState,
  action: CollectionActions.CollectionActions
): State {
  switch (action.type) {
    case CollectionActions.ADD_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.payload],
      };
    case CollectionActions.ADD_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    default:
      return state;
  }
}
