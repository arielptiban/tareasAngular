import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { TaskCounterComponent } from './components/task-counter/task-counter.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewTaskFormComponent, TaskCounterComponent, TaskFilterComponent, TaskListComponent,
    CapitalizePipe,
    CommonModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista de tareas';
  tasks: string[] = [];
  filterText = '';

  get filteredTasks() {
    return this.tasks.filter(task =>
      task.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(taskIndex: number) {
    this.tasks.splice(taskIndex, 1);
  }

  filterTasks(filterText: string | null) {
    if (filterText !== null) {
      this.filterText = filterText;
    }
  }

}
