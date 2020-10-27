import {
    Action
} from '@ngrx/store';
import { Product } from '../reducers';


export enum CartActionTypes {
    ADD_PRODUCT = '[ADD] Product Cart',
    ADD_PRODUCT_SUCCESS = '[ADD] Product Success',
    ADD_PRODUCT_FAILURE = '[ADD] Product Failure',
    DELETE_PRODUCT = '[DELETE] Product',
    DELETE_PRODUCT_SUCCESS = '[DELETE] Product Success',
    DELETE_PRODUCT_FAILURE = '[DELETE] Product Failure',
    UPDATE_PRODUCT = '[UPDATE] Product',
    UPDATE_PRODUCT_SUCCESS = '[UPDATE] Product Success',
    UPDATE_PRODUCT_FAILURE = '[UPDATE] Product Failure',
    CLEAR_CART ='[CLEAR] CART',
    CLEAR_CART_SUCCESS = '[CLEAR] CART Success',
    CLEAR_CART_FAILURE = '[CLEAR] CART Failure',
}

export class AddProductAction implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT;
    constructor(public payload: Product) { }
}
export class AddProductSuccessAction implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}
export class AddProductFailureAction implements Action {
    readonly type = CartActionTypes.ADD_PRODUCT_FAILURE;
    constructor(public payload: Error) { }
}


export class UpdateProduct implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT;
    constructor(public payload: Product[]) { }
}
export class UpdateProductSuccess implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT_SUCCESS;
    constructor(public payload: Product[]) { }
}
export class UpdateProductFailure implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT_FAILURE;
    constructor(public payload: Error) { }
}

export class DeleteProduct implements Action {
    readonly type = CartActionTypes.DELETE_PRODUCT;
}
export class DeleteProductSuccess implements Action {
    readonly type = CartActionTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload: Product[]) { }
}
export class DeleteProductFailure implements Action {
    readonly type = CartActionTypes.DELETE_PRODUCT_FAILURE;
    constructor(public payload: Error) { }
}

export class ClearCart implements Action {
    readonly type = CartActionTypes.CLEAR_CART;
}
export class ClearCartSuccess implements Action {
    readonly type = CartActionTypes.CLEAR_CART_SUCCESS;
}
export class ClearCartFailure implements Action {
    readonly type = CartActionTypes.CLEAR_CART_FAILURE;
}



export type CartActions =
    AddProductAction |
    AddProductSuccessAction |
    AddProductFailureAction| UpdateProduct | UpdateProductFailure | UpdateProductSuccess |
    DeleteProduct | DeleteProductSuccess | DeleteProductSuccess |
    ClearCart | ClearCartFailure | ClearCartSuccess;
