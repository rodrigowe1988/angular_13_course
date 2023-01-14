import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

public comidas : Array<{comida: string, preco: string}> = [
  {comida: "pizza", preco: 'R$15,00'},
  {comida: 'lasanha', preco: 'R$17,00'},
  {comida: 'saladas', preco: 'R$10,00'},
  {comida: 'frutas', preco: 'R$8,00'}
]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    console.log(form.value);
  }

}
