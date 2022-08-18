import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-table-list-render',
  templateUrl: './table-list-render.component.html',
  styleUrls: ['./table-list-render.component.css'],
})
export class TableListRenderComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
