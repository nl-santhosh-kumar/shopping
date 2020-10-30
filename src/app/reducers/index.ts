import * as Actions from '../actions/cart.actions';
import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';

export interface Category {
  cName: string
}
export interface Product {
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string
  inventory: number
  pName: string
  rating: number;
  image: string
}
export interface AppState {
  products: Product[];
  categories: Category[];
  total: number;
}

const initialState: AppState = {
  products: [],
  total: 0,
  categories: []
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
  on(Actions.ADD_CATEGORY_SUCCESS, (state, action) => {
    return {
      ...state,
     categories: action.categories
    };
  }),
  on(Actions.ADD_CATEGORY_FAILURE, (state, action) => {
    return {
      ...state
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

export const getCategories = createSelector(
  stateFeature,
  (state: AppState) => state.categories
);
