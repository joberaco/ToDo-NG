import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoListComponent,
    CreateTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TodoListComponent
  ]
})
export class TodoModule { }
