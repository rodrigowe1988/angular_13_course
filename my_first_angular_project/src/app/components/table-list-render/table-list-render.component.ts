import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list-render',
  templateUrl: './table-list-render.component.html',
  styleUrls: ['./table-list-render.component.css'],
})
export class TableListRenderComponent implements OnInit {
  animals = [
    { name: 'Jerry', type: 'Mouse' },
    { name: 'Tom', type: 'Cat' },
    { name: 'Spyke', type: 'Dog' },
    { name: 'Piu-Piu', type: 'Bird' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
