import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDoneComponent } from './tasks-done.component';



@NgModule({
  declarations: [
    TasksDoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TasksDoneComponent]
})
export class TasksDoneModule { }
