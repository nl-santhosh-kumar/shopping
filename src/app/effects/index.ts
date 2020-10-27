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
 CartActionTypes, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCTS_FAILURE
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
    constructor(
        private actions$: Actions,
        private service: Service
    ) { }
}
