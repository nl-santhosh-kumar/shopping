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
    switchMap
} from 'rxjs/operators';
import {
    of
} from 'rxjs';
import {
  LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCTS_FAILURE, ADD_CATEGORY, ADD_CATEGORY_FAILURE, ADD_CATEGORY_SUCCESS,
  ADD_PRODUCT_TO_CART
} from '../actions/cart.actions';
import {
    Service
} from '../service/index';
import {Product, Category } from '../interface';

@Injectable()
export class AppEffects {
    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(LOAD_PRODUCTS),
        switchMap(() => this.service.getProductList()),
        switchMap((products: Product[]) => of(LOAD_PRODUCTS_SUCCESS({products}))),
        catchError(error => of(LOAD_PRODUCTS_FAILURE(error)))
    );
    @Effect()
    loadCategory$ = this.actions$.pipe(
        ofType(ADD_CATEGORY),
        switchMap(() => this.service.getCategoryList()),
        switchMap((categories: Category[]) => of(ADD_CATEGORY_SUCCESS({categories}))),
        catchError(error => of(ADD_CATEGORY_FAILURE(error)))
    );
    @Effect()
    addProductToCart$ = this.actions$.pipe(
        ofType(ADD_PRODUCT_TO_CART),
        switchMap(() => this.service.getCategoryList()),
        switchMap((categories: Category[]) => of(ADD_CATEGORY_SUCCESS({categories}))),
        catchError(error => of(ADD_CATEGORY_FAILURE(error)))
    );
    constructor(
        private actions$: Actions,
        private service: Service
    ) { }
}
