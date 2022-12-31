import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:any;
  desc:any;

  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter()

  onSubmit(){
    const todo={
      sno: 4,
      title: this.title,
      desc: this.desc,
      active: true   
    }
    this.todoAdd.emit(todo);
  }
}
