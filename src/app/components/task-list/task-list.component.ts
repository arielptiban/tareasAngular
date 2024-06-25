import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CapitalizePipe,
    FormsModule,
    CommonModule,
    TaskItemComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tasks: string[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(taskIndex: number) {
    this.deleteTask.emit(taskIndex);
  }
}