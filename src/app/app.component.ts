import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo List 2020';
}
