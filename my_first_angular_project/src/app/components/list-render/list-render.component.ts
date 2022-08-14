import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Jerry', type: 'Mouse' },
    { name: 'Tom', type: 'Cat' },
    { name: 'Spyke', type: 'Dog' },
    { name: 'Piu-Piu', type: 'Bird' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
