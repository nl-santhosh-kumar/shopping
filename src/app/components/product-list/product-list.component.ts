import { Component, OnInit } from '@angular/core';
import { AppState, getProducts } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import { Product} from '../../reducers/index';

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
