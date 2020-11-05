import { Component, OnInit, Input } from '@angular/core';
import { getProducts } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import { AppState, Product } from '../../interface';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [];
  selectedCategory: string = '';
  constructor(public store: Store<AppState>, private service: Service) { }
  ngOnInit(): void {
    this.getProducts()
    this.service.selectedCategory.subscribe(selectedCategory => {
      this.getProducts()
      this.refineSearch(selectedCategory);
    });
  }
  getProducts() {
    return this.store.pipe(select(getProducts)).subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  refineSearch(keyword: string){
   
   this.products = (this.products.filter(product => product.category == keyword))
  }

}
