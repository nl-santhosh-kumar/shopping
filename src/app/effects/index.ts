import {
    Injectable
} from '@angular/core';
import {
    Actions,
    Effect,
    ofType 
} from '@ngrx/effects';
import {
    catchError,
    switchMap,
    pluck
} from 'rxjs/operators';
import {
    of
} from 'rxjs';
import {
    LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCTS_FAILURE, ADD_CATEGORY, ADD_CATEGORY_FAILURE, ADD_CATEGORY_SUCCESS,
    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
   
    UpdateCart,
    UpdateCartSuccess,
    UpdateCartFailure,
    UPDATE_CART,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE
} from '../actions/cart.actions';
import {
    Service
} from '../service/index';
import { Product, Category, AppState } from '../interface';

import {CartActionTypes  } from '../actions/cart.actions'
@Injectable()
export class AppEffects {
    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(LOAD_PRODUCTS),
        switchMap(() => this.service.getProductList()),
        switchMap((products: Product[]) => of(LOAD_PRODUCTS_SUCCESS({ products }))),
        catchError(error => of(LOAD_PRODUCTS_FAILURE(error)))
    );
    @Effect()
    loadCategory$ = this.actions$.pipe(
        ofType(ADD_CATEGORY),
        switchMap(() => this.service.getCategoryList()),
        switchMap((categories: Category[]) => of(ADD_CATEGORY_SUCCESS({ categories }))),
        catchError(error => of(ADD_CATEGORY_FAILURE(error)))
    );
    @Effect()
    getCart$ = this.actions$.pipe(
        ofType(GET_CART),
        switchMap((action) => this.service.getCart({userId: 'test'})),
        switchMap((cart) => of(GET_CART_SUCCESS({ cart }))),
        catchError(error => of(GET_CART_FAILURE(error)))
    );
    constructor(
        private actions$: Actions,
        private service: Service
    ) { }
}
