import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, AppState } from '../../interface';
import { ADD_PRODUCT_TO_CART } from 'src/app/actions/cart.actions';
@Component({
  selector: 'app-product-infor',
  templateUrl: './product-infor.component.html',
  styleUrls: ['./product-infor.component.scss']
})
export class ProductInforComponent implements OnInit {

  constructor(public store: Store < AppState > ) {}
  @Input() product: Product;
  ngOnInit(): void {
  }
    addToCart () {
      this.store.dispatch(ADD_PRODUCT_TO_CART());
    }

    ConvertString(value){
      if(value){
        return Array(parseFloat(value))
      }
     return []
      }
}
