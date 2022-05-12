import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    TodoListComponent,
    CreateTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TodoListComponent
  ]
})
export class TodoModule { }
