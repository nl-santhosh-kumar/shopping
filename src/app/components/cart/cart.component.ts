import { Component, OnInit } from '@angular/core';
import { Product, AppState, CartProduct } from 'src/app/interface';
import { select, Store } from '@ngrx/store';
import { getCart } from 'src/app/reducers';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: CartProduct[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    return this.store.pipe(select(getCart)).subscribe((cart) => {
      cart.product.map((product) => {
        this.products.push({ ...product, quantity: 1})
      })
    });
  }
  addQuantity (product: CartProduct) {
    const matchedProduct = this.products.filter(product => product== product)[0];
    console.log(matchedProduct);
    matchedProduct.quantity +=1
  }
  getPrice(product: CartProduct) {
    return product.price * product.quantity
  }
  getCartTotal(): number{
    let totalCartValue = 0;
    this.products.map((product: CartProduct) => totalCartValue+= (this.getPrice(product)));
    return totalCartValue;
  }
}
