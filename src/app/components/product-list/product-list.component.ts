import { Component, OnInit } from '@angular/core';
import {  getProducts } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import { AppState, Product} from '../../interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(public store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.pipe(select(getProducts)).subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
