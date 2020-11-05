import { Component, OnInit } from '@angular/core';
import { getUserId, getCart } from 'src/app/reducers';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  showProfile: boolean = false;
  cartItems: number = 0;
  constructor(public store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.pipe(select(getUserId)).subscribe((userId: string) => {
      this.showProfile = userId ? true : false;
    });
    this.store.pipe(select(getCart)).subscribe(cart => {
        this.cartItems =  cart.product.length || 0
    })
  }
  openCart(){
    this.router.navigate(['/cart'])
  }
}
