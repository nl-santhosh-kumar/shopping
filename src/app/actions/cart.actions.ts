import {
    Action, createAction, props
} from '@ngrx/store';
import { Product,Category } from '../interface';


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
    CLEAR_CART = '[CLEAR] CART',
    CLEAR_CART_SUCCESS = '[CLEAR] CART Success',
    CLEAR_CART_FAILURE = '[CLEAR] CART Failure',
    LOAD_PRODUCTS = '[LOAD] Load Products',
    LOAD_PRODUCTS_SUCCESS = '[Load] Product Success',
    LOAD_PRODUCTS_FAILURE = '[Load] Product Failure',
    ADD_CATEGORY = '[ADD] Category',
    ADD_CATEGORY_SUCCESS = '[ADD] Category Success',
    ADD_CATEGORY_FAILURE = '[ADD] Category Failure'
}

export const SET_USER_ID = createAction(
    '[SET] User Id to store',
    props<{userId: string}>()
);

export const LOAD_PRODUCTS = createAction(
    '[LOAD PRODUCTS] populate product list'
);
export const LOAD_PRODUCTS_SUCCESS = createAction(
    '[LOAD PRODUCTS] populate product list success',
    props<{ products: Product[] }>()
);
export const LOAD_PRODUCTS_FAILURE = createAction(
    '[POPULATE Effects] update city failure',
    props<{ err: any }>()
);

export const ADD_PRODUCT = createAction(
    '[LOAD PRODUCTS] populate product list'
);
export const ADD_PRODUCT_SUCCESS = createAction(
    '[LOAD PRODUCTS] populate product list success',
    props<{ products: Product[] }>()
);
export const ADD_PRODUCT_FAILURE = createAction(
    '[POPULATE Effects] update city failure',
    props<{ err: any }>()
);

export const ADD_CATEGORY = createAction(
    '[LOAD CATEGORY] populate product list'
);
export const ADD_CATEGORY_SUCCESS = createAction(
    '[LOAD CATEGORY] populate product list success',
    props<{ categories: Category[] }>()
);
export const ADD_CATEGORY_FAILURE = createAction(
    '[LOAD CATEGORY FAIL] update city failure',
    props<{ err: any }>()
);


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
    AddProductFailureAction | UpdateProduct | UpdateProductFailure | UpdateProductSuccess |
    DeleteProduct | DeleteProductSuccess | DeleteProductSuccess |
    ClearCart | ClearCartFailure | ClearCartSuccess;
