import { CartActions, CartActionTypes } from '../actions/cart.actions';

export interface Product {
  name: string;
  price: number;
  quantity: number;
}
export interface Cart {
  products: Product[];
  total: number;
}

const initialState: Cart = {
 products: [],
 total: 0
};

export function CartReducer(state: Cart = initialState, cartActions: CartActions) {
  switch (cartActions.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...state,
      };
    case CartActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: cartActions.payload,
      };
    case CartActionTypes.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: cartActions.payload,
      };
    default:
      return state;
  }
}
