import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  // templateUrl: './todo-item.component.html',
  template: `
    <div class="todo-item">
      {{ item.title }}
    </div>
  `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() {}

  ngOnInit(): void {}
}
