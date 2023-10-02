import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../models/ToDo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ToDo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First ToDo',
        completed: false
      },
      {
        content: 'Second ToDo',
        completed: false
      }
    ]
  }
  toggleDone(id: number): void {
    this.todos.forEach((v, i) => {
      if (i === id) {
        v.completed = !v.completed;
      }
    });
  }  
  
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !==id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}

