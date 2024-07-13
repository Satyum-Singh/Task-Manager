import { Component } from '@angular/core';
import {Todo} from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor,TodoItemComponent, AddTodoComponent,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos : Todo[];
  constructor() {
    this.todos = [
      {
        sno:1,
        title:"This is title 1",
        desc:"Description 1",
        active:true
      }
    ]
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }
}
