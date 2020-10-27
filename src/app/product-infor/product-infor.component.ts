import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from '../reducers/index';
import { AddProductAction } from '../actions/cart.actions';
@Component({
  selector: 'app-product-infor',
  templateUrl: './product-infor.component.html',
  styleUrls: ['./product-infor.component.scss']
})
export class ProductInforComponent implements OnInit {


  constructor(public store: Store < Cart > ) {}

  ngOnInit(): void {
  }

    addProduct () {
      this.store.dispatch(new AddProductAction({
        name: 'adsf',
        price: 0,
        quantity: 0
      }))
    }
}
