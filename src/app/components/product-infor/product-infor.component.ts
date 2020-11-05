import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, AppState } from '../../interface';
import { UpdateCart, UPDATE_CART } from 'src/app/actions/cart.actions';
import { getCart, getState } from 'src/app/reducers';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-product-infor',
  templateUrl: './product-infor.component.html',
  styleUrls: ['./product-infor.component.scss']
})
export class ProductInforComponent implements OnInit {

  constructor(public store: Store<AppState>, private service: Service) { }
  @Input() product: Product;
  ngOnInit(): void {
  }
  addToCart(product: Product) {
    // get the cart instance from store 
    this.store.select(getState).subscribe((state) => {
      const cartInstance = {
        userId: state.userId,
        product:[]
      }
      this.service.addToCart(cartInstance).subscribe((response) => {
        console.log(response)
      })
    })

  }

  ConvertString(value) {
    if (value) {
      return Array(parseFloat(value))
    }
    return []
  }
}
