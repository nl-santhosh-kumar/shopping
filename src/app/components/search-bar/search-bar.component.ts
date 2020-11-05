import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, Category } from 'src/app/interface';
import { getCategories } from 'src/app/reducers';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatOption } from '@angular/material/core';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  categories: Category[]
  searchBar = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  selectedCategory: string;
  constructor(public store: Store<AppState>, private service: Service) {}

  ngOnInit(): void {
   // this.service.selectedCategory.subscribe(selectedCategory => this.selectedCategory = selectedCategory)
    this.store.pipe(select(getCategories)).subscribe((categories) => {
      categories.map(category=> {
        this.options.push(category.cName)
      })
    });
    this.filteredOptions = this.searchBar.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onCategorySelected () {
    this.service.onCategorySelection(this.searchBar.value)
  }
}
