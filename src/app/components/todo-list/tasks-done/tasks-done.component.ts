import { Component, Input, OnInit } from '@angular/core';
import { ListItens } from 'src/app/models/itens-class';

@Component({
  selector: 'tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.scss']
})
export class TasksDoneComponent implements OnInit {

  @Input() itensDone: ListItens[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
