import { Component,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  title:string;
  desc:string;
  sno:number;
  OnSubmit(){
    const todo = {
      sno : 4,
      title : this.title,
      desc : this.desc,
      active : true,
    }
    this.todoAdd.emit(todo);
  }
}
