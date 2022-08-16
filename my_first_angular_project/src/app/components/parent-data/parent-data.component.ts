import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name?: string;
  //name?: string = 'Solve this problem and receive the correct value'

  constructor() { }

  ngOnInit(): void {
  }

}
