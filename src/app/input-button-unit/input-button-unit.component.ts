import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  // templateUrl: './input-button-unit.component.html',
  template: `<p>input-button-unit works!</p>
    The title is: {{ title }} `,
  styleUrls: ['./input-button-unit.component.css'],
})
export class InputButtonUnitComponent implements OnInit {
  title: string;

  constructor() {
    this.changeTitle('I like Angular');
  }

  ngOnInit(): void {
    this.changeTitle('Angular CLI Rules.');
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
