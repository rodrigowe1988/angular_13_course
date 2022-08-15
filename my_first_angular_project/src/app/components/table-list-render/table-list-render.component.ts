import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-table-list-render',
  templateUrl: './table-list-render.component.html',
  styleUrls: ['./table-list-render.component.css'],
})
export class TableListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Jerry', type: 'Mouse' , age: 1},
    { name: 'Tom', type: 'Cat' , age: 2},
    { name: 'Spyke', type: 'Dog', age: 4},
    { name: 'Piu-Piu', type: 'Bird', age: 1},
  ];

  constructor() {}

  ngOnInit(): void {}
}
