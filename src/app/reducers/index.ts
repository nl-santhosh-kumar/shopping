import * as Actions from '../actions/cart.actions';
import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';

export interface Product {
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string
  inventory: number
  pName: string
  rating: number
}
export interface AppState {
  products: Product[];
  total: number;
}

const initialState: AppState = {
  products: [],
  total: 0
};

export const AppStateKey = 'AppStateKey';


const _reducer = createReducer(
  initialState,
  on(Actions.LOAD_PRODUCTS_SUCCESS, (state, action) => {
    return {
      ...state,
     products: action.products
    };
  }),
  on(Actions.LOAD_PRODUCTS_FAILURE, (state, action) => {
    return {
      ...state,
      products: state.products
    };
  }),
);



export function AppReducer(state, action) {
  return _reducer(state, action);
}

/** selectors */
export const stateFeature = createFeatureSelector<AppState>(AppStateKey);

export const getProducts = createSelector(
  stateFeature,
  (state: AppState) => state.products
);
