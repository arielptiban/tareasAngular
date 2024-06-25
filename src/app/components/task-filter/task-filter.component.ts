import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {
  @Output() filterTasks = new EventEmitter<string>();

  onFilterTasks(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterTasks.emit(target.value);
  }
}
