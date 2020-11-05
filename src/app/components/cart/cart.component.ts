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
  products: CartProduct[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    return this.store.pipe(select(getCart)).subscribe((cart) => {
      console.log(cart)
      this.products = cart.product
    });
  }
}
