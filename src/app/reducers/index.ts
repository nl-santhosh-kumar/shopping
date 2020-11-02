import * as Actions from '../actions/cart.actions';
import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { AppState, Cart } from '../interface';


const initialState: AppState = {
  products: [],
  total: 0,
  categories: [],
  userId: '',
  cart: {
    userId: null,
    totalValue: 0,
    product: []
  }
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
  on(Actions.SET_USER_ID, (state, action) => {
    return {
      ...state,
      userId: action.userId
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

export const getUserId = createSelector(stateFeature,
  (state: AppState) => state.userId
);

export const getCategories = createSelector(
  stateFeature,
  (state: AppState) => state.categories
);
export const getCart = createSelector(
  stateFeature,
  (state: AppState) => state.cart
);

