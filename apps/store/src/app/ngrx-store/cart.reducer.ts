import { Book } from '../book.model';
import * as CartActions from './cart.actions';

export interface State {
  cartItems: Book[];
  isCart: boolean;
  items: Book[];
  searchWord: string;
  selectedId: number;
}

export const initialState: State = {
  cartItems: [],
  isCart: false,
  items: [],
  searchWord: '',
  selectedId: -1,
};

export function cartReducer(
  state: State = initialState,
  action: CartActions.CartActions | any
): State {
  switch (action.type) {
    case CartActions.ADD_CARTITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        isCart: false,
      };
    case CartActions.DELETE_CARTITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((book) => {
          return book.id !== action.payload;
        }),
        isCart: false,
      };
    case CartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        isCart: false,
      };
    case CartActions.IS_CART:
      return {
        ...state,
        isCart: action.payload,
      };
    // case CartActions.GET_BOOKSBYNAME:
    //   return {
    //     ...state,
    //     searchWord: action.payload,
    //   };
    case CartActions.ADD_BOOKS:
      return {
        ...state,
        items: action.payload.books,
      };
    case CartActions.SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload,
      };
    default:
      return state;
  }
}
