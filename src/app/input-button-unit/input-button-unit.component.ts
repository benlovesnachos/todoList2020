import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  // templateUrl: './input-button-unit.component.html',
  template: `
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($event.target.value)"
    />

    <button (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css'],
})
export class InputButtonUnitComponent implements OnInit {
  title: string;

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    // this.changeTitle('I like Angular');
  }

  ngOnInit(): void {
    // this.changeTitle('Angular CLI Rules.');
    // setTimeout(() => {
    //   this.changeTitle('This is not the title you are looking for');
    // }, 3000);
  }

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
