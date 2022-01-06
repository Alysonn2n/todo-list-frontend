import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  public itensCreated: any[] = [];
  
  constructor(private tdlService: TodoListService) { }
  
  ngOnInit(): void {
    this.getItens()
  }

  getItens() {
    this.tdlService.get().subscribe(
      sucess => {
        this.itensCreated = sucess.tasks;
      }, error => {
        console.log(error);
      }
    )
  }

}
