import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Product 1', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'product 2', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Product 3', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Product 4', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Product 1', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'product 2', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Product 3', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Product 4', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Product 1', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'product 2', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Product 3', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Product 4', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
