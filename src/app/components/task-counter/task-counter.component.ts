import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-counter',
  standalone: true,
  imports: [],
  templateUrl: './task-counter.component.html',
  styleUrl: './task-counter.component.css'
})
export class TaskCounterComponent {
  @Input() tasks: string[] = [];
}
