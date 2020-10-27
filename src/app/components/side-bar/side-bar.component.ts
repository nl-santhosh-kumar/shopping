import { Component, OnInit } from '@angular/core';
import { AppState, getProducts, getCategories } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import { Category } from '../../reducers/index';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  categories = []
  task = [
    { name: 'Vegetables', completed: false },
    { name: 'Fashion', completed: false  },
    { name: 'Electronics', completed: false}
  ]
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.pipe(select(getCategories)).subscribe((categories: Category[]) => {
      this.categories = Object.values(categories)
    });
  }

}
