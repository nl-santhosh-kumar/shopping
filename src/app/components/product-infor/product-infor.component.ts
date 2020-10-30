import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, AppState } from '../../interface';
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
    addProduct () {
    }

    ConvertString(value){
      if(value){
        return Array(parseFloat(value))
      }
     return []
      }
}
