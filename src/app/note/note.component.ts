import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() index: number;
  note: string
  inputForm = this.formBuilder.group({
    noteInput : ""
  });
  constructor(
    private formBuilder: FormBuilder
  ){};

  ngOnInit(){
    this.note = localStorage.getItem("note" + this.index);
    console.log(this.note);
  }

  onSubmit(){
    this.note = this.inputForm.get("noteInput").value;
    localStorage.setItem("note" + this.index, this.note)
    console.warn('Your order has been submitted', this.inputForm.value);
    this.inputForm.reset();
  }
}
