import { Action, State } from '@ngrx/store';
import * as CartActions from './cart.actions';
import * as cartReducer from '../ngrx-store/cart.reducer';
import { Book } from '../book.model';
import { Collection } from '../collection.model';

describe('CartReducer', () => {
  let initialState: cartReducer.State;
  let book: Book;
  let collection: Collection;
  beforeEach(() => {
    initialState = cartReducer.initialState;
    book = {
      id: '1',
      title: 'title',
      imageLink: '',
      description: '',
      authors: '',
      ratingsCount: '',
      publisher: '',
      language: '',
      pageCount: '',
    };
    collection = {
      title: '',
      imgLink: '',
      description: '',
      authors: '',
      name: '',
      email: '',
      phone: 0,
      address: '',
    };
  });
  afterEach(() => {
    initialState = null;
  });

  it('should create cart reducer', () => {
    expect(cartReducer.cartReducer).toBeTruthy();
  });

  it('should return the default state', () => {
    const state = cartReducer.cartReducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('should add book to store CartItems', () => {
    const action = new CartActions.AddCartItem(book);
    const state = cartReducer.cartReducer(initialState, action);

    expect(state.cartItems.length).toEqual(1);
    expect(state.cartItems[0]).toEqual(book);
  });
  it('should delete book from store CartItems', () => {
    const addAction = new CartActions.AddCartItem(book);
    const addState = cartReducer.cartReducer(initialState, addAction);
    expect(addState.cartItems.length).toEqual(1);

    const deleteAction = new CartActions.DeletCartItem('1');
    const state = cartReducer.cartReducer(addState, deleteAction);

    expect(state.cartItems.length).toEqual(0);
  });
});
