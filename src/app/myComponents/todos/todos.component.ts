import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  localTodo:string|null=""
  todos: Todo[] = [];
  constructor() {
    this.localTodo=localStorage.getItem('todo')
    if(this.localTodo==null){
      this.todos = [];
    }
    else{
      this.todos=JSON.parse(this.localTodo)
    }
  }
  deleteTodoItem(event:Todo){
    const index=this.todos.indexOf(event)
    this.todos.splice(index,1)
    localStorage.setItem("todo",JSON.stringify(this.todos))
  };
  addTodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem("todo",JSON.stringify(this.todos))
  }
}
