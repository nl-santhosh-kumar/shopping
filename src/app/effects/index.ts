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
 CartActionTypes, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCTS_FAILURE, ADD_CATEGORY, ADD_CATEGORY_FAILURE, ADD_CATEGORY_SUCCESS
} from '../actions/cart.actions';
import {
    Service
} from '../service/index';

@Injectable()
export class AppEffects {
    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(LOAD_PRODUCTS),
        switchMap(() => this.service.getProductList()),
        switchMap(Product => of(LOAD_PRODUCTS_SUCCESS({products: Product}))),
        catchError(error => of(LOAD_PRODUCTS_FAILURE(error)))
    );
    @Effect()
    loadCategory$ = this.actions$.pipe(
        ofType(ADD_CATEGORY),
        switchMap(() => this.service.getCategoryList()),
        switchMap(Category => of(ADD_CATEGORY_SUCCESS({categories: Category}))),
        catchError(error => of(ADD_CATEGORY_FAILURE(error)))
    );
    constructor(
        private actions$: Actions,
        private service: Service
    ) { }
}
