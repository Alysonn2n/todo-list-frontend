import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task-class';

@Component({
  selector: 'tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.scss']
})
export class TasksDoneComponent implements OnInit {

  @Input() itensDone: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
