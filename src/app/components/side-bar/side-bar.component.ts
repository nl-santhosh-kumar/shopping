import { Component, OnInit } from '@angular/core';
import { getProducts, getCategories } from '../../reducers/index';
import { Store, select } from '@ngrx/store';
import { Category, AppState } from '../../interface';
import { Service } from 'src/app/service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  categories = []
  task = []
  constructor(public store: Store<AppState>, private service: Service) {}

  ngOnInit(): void {
    this.store.pipe(select(getCategories)).subscribe((categories: Category[]) => {
      categories.map((category) => {
        this.categories.push({
          cName: category.cName,
          checked: false
        })
      })
    });
  }
  toggle(event){
    this.service.onCategorySelection(event.cName)
  }

}
