import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecordsComponent } from './list-records.component';

const routes: Routes = [{
  path: '', component: ListRecordsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRecordsRoutingModule { }
