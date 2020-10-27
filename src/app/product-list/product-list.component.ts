import { Component, OnInit } from '@angular/core';
import { AppState, getProducts } from '../reducers/index'
import { Store, select } from '@ngrx/store';
import { LOAD_PRODUCTS } from '../actions/cart.actions';
import { Product} from '../reducers/index'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(public store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(LOAD_PRODUCTS());
    this.store.select(getProducts).subscribe((product) => {
      this.products= product
    })

    this.store.pipe(select(getProducts)).subscribe((products: Product[]) => {
      this.products = products;

    });
  }

}
