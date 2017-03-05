import { Component, OnInit } from '@angular/core';
import { Todoitem } from './../todo-item.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos: string[];

  constructor() { 
  this.todos = [
  new TodoItem = "Learn Angular", "asdf", newDate(),
  new TodoItem = "Learn other", "asdf", newDate()];}
  ngOnInit() {
  }
}

