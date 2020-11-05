import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, AppState } from '../../interface';
import { UpdateCart, ADD_PRODUCT_TO_CART } from 'src/app/actions/cart.actions';
import { getCart, getState } from 'src/app/reducers';
import { Service } from 'src/app/service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-infor',
  templateUrl: './product-infor.component.html',
  styleUrls: ['./product-infor.component.scss']
})
export class ProductInforComponent implements OnInit {

  constructor(public store: Store<AppState>, 
    private service: Service,
    private snackBar: MatSnackBar,) { }
  @Input() product: Product;
  ngOnInit(): void {
  }
  addToCart(product: Product) {
    // get the cart instance from store 
   this.store.dispatch(ADD_PRODUCT_TO_CART({product}))
   console.log(product)
   this.openSnackBar(product.pName + ' added to cart');
  }

  openSnackBar(message: string,) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
  ConvertString(value) {
    if (value) {
      return Array(parseFloat(value))
    }
    return []
  }
}
