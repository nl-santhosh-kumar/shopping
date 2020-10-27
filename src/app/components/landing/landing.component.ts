import { Component, OnInit } from '@angular/core';
import { AppState, getProducts } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import { ADD_CATEGORY, LOAD_PRODUCTS } from '../../actions/cart.actions';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(LOAD_PRODUCTS());
    this.store.dispatch(ADD_CATEGORY())
  }

}
