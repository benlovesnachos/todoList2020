import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  // templateUrl: './input-button-unit.component.html',
  template: `
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="changeTitle($event.target.value)"
    />
    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css'],
})
export class InputButtonUnitComponent implements OnInit {
  title: string;

  constructor() {
    this.changeTitle('I like Angular');
  }

  ngOnInit(): void {
    this.changeTitle('Angular CLI Rules.');
    // setTimeout(() => {
    //   this.changeTitle('This is not the title you are looking for');
    // }, 3000);
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
