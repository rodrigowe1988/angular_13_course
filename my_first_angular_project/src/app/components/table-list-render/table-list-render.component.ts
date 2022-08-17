import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-table-list-render',
  templateUrl: './table-list-render.component.html',
  styleUrls: ['./table-list-render.component.css'],
})
export class TableListRenderComponent implements OnInit {
  animals: Animal[] = [
    { id: 1, name: 'Jerry', type: 'Mouse' , age: 1},
    { id: 2, name: 'Tom', type: 'Cat' , age: 2},
    { id: 3, name: 'Spyke', type: 'Dog', age: 4},
    { id: 4, name: 'Piu-Piu', type: 'Bird', age: 1},
    { id: 5, name: 'Frajola', type: 'Cat' , age: 3},
  ];

  constructor() {}

  ngOnInit(): void {}
}
