import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordFormComponent } from './record-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecordFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  exports: [RecordFormComponent]
})
export class RecordFormModule { }
