import { Component, OnInit } from '@angular/core';
import {Todoitem } from './../todo-item.model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos: string[];

  constructor() { 
  this.todos = ["Learn Angular", "asdf", newDate()]
  this.todos = ["Learn Angular", "asdf", newDate()]
  ;}
  ngOnInit() {

}
}

