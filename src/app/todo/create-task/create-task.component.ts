import { Component } from '@angular/core';

import { TaskService } from 'src/app/task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  task: Task = ({} as any) as Task;

  constructor(
    private taskService: TaskService) { }

  onSubmit() {
    /* start/end time difference in hours*/
    this.task.hour_estimate = Math.floor((new Date(this.task.end_time).getTime() - new Date(this.task.start_time).getTime()) / 36e5);
    this.task.completed = false;

    this.taskService.addTask(this.task)
      .subscribe(() => window.location.reload());
  }

}
