import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TodoListService } from 'src/app/services/todo-list.service';
import { Task } from 'src/app/models/task-class';
import * as M from 'materialize-css'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, AfterViewInit {
  /* public tasksList = new Task(); */
  public form: FormGroup;
  
  public tasksCreated: Task[] = [];
  public activeField: boolean = false;
  public modalShow: boolean = false;
  
  constructor(
    formbuilder: FormBuilder,
    private tdlService: TodoListService,
    ) {
    this.form = formbuilder.group({
      name: ["", Validators.required],
      author: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.getTasks()
  }

  ngAfterViewInit() {
    /* init modal */
    const elems = document.querySelectorAll('.modal');
    const modal = M.Modal.init(elems);
  }

  getTasks() {
    this.tdlService.get().subscribe(
      sucess => {
        this.tasksCreated = sucess.tasks;
      }, error => {
        console.log(error);
      }
    )
  }


  Remove(id: number) {
    debugger;
    console.log(this.tasksCreated)
    this.modalShow = true;
  }

  Submit() {
    console.log(this.form);
    debugger;
    this.tdlService.create(this.form.value).subscribe(
      result => {
        console.log(result);
        this.getTasks()
      },
      error => console.log(error)
    )
  }

}
