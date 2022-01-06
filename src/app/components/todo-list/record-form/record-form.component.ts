import { Component, OnInit } from '@angular/core';
import { ListItens } from 'src/app/models/itens-class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent implements OnInit {
  public listItens = new ListItens();
  public form: FormGroup;
  public activeField: boolean = false;

  constructor(
    formbuilder: FormBuilder
  ) {
    this.form = formbuilder.group({
      name: ["", Validators.required],
      author: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  Submit() {
    console.log(this.form);
  }

}
