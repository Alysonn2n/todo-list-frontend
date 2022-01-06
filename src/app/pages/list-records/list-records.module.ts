import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecordFormModule } from 'src/app/components/todo-list/record-form/record-form.module';
import { ListRecordsRoutingModule } from './list-records-routing.module';
import { ListRecordsComponent } from './list-records.component';
import { TableListModule } from 'src/app/components/todo-list/table-list/table-list.module';
import { TasksDoneModule } from 'src/app/components/todo-list/tasks-done/tasks-done.module';

@NgModule({
  declarations: [
    ListRecordsComponent,
    
  ],
  imports: [
    CommonModule,
    ListRecordsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableListModule,
    RecordFormModule,
    TasksDoneModule
  ]
})
export class ListRecordsModule { }
