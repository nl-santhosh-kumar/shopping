import { Component, OnInit } from '@angular/core';
import { AppState } from '../../interface';
import { Store, select } from '@ngrx/store';
import { ADD_CATEGORY, LOAD_PRODUCTS, GET_CART, UPDATE_CART } from '../../actions/cart.actions';
import { pluck } from 'rxjs/operators';
import { getCart } from 'src/app/reducers';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_PRODUCTS());
    this.store.dispatch(ADD_CATEGORY());

    // this.store.select(getCart).subscribe((state: any) => {
    //  // there is a change in cart, call the load cart details
    //  console.log(state)
    //  console.log('there is a change in cart')
    //  this.store.dispatch(UPDATE_CART(state));
    //  this.store.dispatch(GET_CART({ userId: state.userId }));
    // })

  }

}
