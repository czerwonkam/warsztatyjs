import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos: string[];

  constructor() { }
  this.todos = ["Zrob to", "Zrob tamto", "Zrob cos jeszcze"];
  ngOnInit() {
  }

}
