import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  name: string  = 'Rodrigo';
  age: number = 34;
  profession: string = "Developer";
  hobbies = ['workout', 'study', 'yoga'];
  car = {
    name: 'Ferrari 350',
    color: 'red'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
