import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task._id).subscribe();
  }

  markCompleted(task: Task): void {
    task.completed = true;
    
    const updateIndex = this.tasks.findIndex(t => t._id == task._id);
    this.tasks[updateIndex] = task;

    this.taskService.updateTask(task).subscribe();
  }
}
