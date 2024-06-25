import { Component, Input } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CapitalizePipe
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: string;
}
