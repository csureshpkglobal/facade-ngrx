import { Action } from '@ngrx/store';
import * as CartActions from './cart.actions';
import * as cartReducer from '../ngrx-store/cart.reducer';

describe('CartReducer', () => {
  it('should create cart reducer', () => {
    expect(cartReducer.cartReducer).toBeTruthy();
  });

  it('should return initial state', () => {
    const { initialState } = cartReducer;
    // const MOCK_ACTION = '[MOCK] ACTION';

    // class MockAction implements Action {
    //   readonly type = MOCK_ACTION;
    //   readonly payload: unknown;

    //   constructor(payload?: unknown) {
    //     this.payload = payload;
    //   }
    // }

    // function createMockReducer<T>(initialState: T) {
    //     return function reducer(state: any = initialState, action: { payload: any }): T {
    //       // Everything will be stored to the store
    //       return { ...state, ...action.payload };
    //     };
    //   }

    const action = {
      type: 'Unknown',
    };
    const state = cartReducer.cartReducer(initialState, action);
    // const noopAction = new Action('noop' as CartActions);
    // const newState = todoListReducers(undefined, noopAction);
    expect(state).toBe(initialState);
  });
  it('should', () => {
    expect(1).toBeTruthy();
  });
});
