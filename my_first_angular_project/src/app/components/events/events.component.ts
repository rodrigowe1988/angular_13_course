import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show;
    if (this.show === true) {
      console.log('Showing message!');
    } else {
      console.log('Hiding message');
    }
  }
}
