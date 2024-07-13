import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosComponent} from './Mycomponents/todos/todos.component'
import {TodoItemComponent} from './Mycomponents/todo-item/todo-item.component'
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './Mycomponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,CommonModule,TodoItemComponent,AddTodoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Manager';
}
