import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() index: number;
  note: string;
  dateCreated: Date;
  inputForm = this.formBuilder.group({
    noteInput : ""
  });
  constructor(
    private formBuilder: FormBuilder
  ){};

  ngOnInit(){
    // let note = localStorage.getItem("note" + this.index);
    this.fromString(localStorage.getItem("note" + this.index));
  }

  onSubmit(){
    if(!localStorage.getItem("note" + this.index)){
      let numNotesStr = localStorage.getItem("numNotes");
      if(numNotesStr){
        let numNotes = +numNotesStr;
        localStorage.setItem("numNotes", numNotes+1 + "");
      } else {
        localStorage.setItem("numNotes", "1");
      }
    }
    this.note = this.inputForm.get("noteInput").value;
    this.dateCreated = new Date(Date.now());
    localStorage.setItem("note" + this.index, this.toString())
    
    console.log(this)
    // console.warn('Your order has been submitted', this.inputForm.value);
    this.inputForm.reset();
  }

  toString(): string {
    let str = ""
    str += this.index + " (@) " + this.note + " (@) " + this.dateCreated;
    console.log(str)
    return str;
  }

  fromString(n: string){

    console.log(n);
    let endNumIndex = n.indexOf("(@)") - 1;
    console.log("endNumIndex: " + endNumIndex)
    let index = n.substring(0, endNumIndex);
    console.log("Index: " + index);
    let endNoteIndex = n.indexOf("(@)", endNumIndex + 5);
    console.log("endNoteIndex: " + endNoteIndex)
    let note = n.substring(endNumIndex + 5, endNoteIndex);
    console.log("Note: " + note)
    let date = n.substring(endNoteIndex + 4);
    console.log("Date: " + date);

    this.index = +index;
    this.note = note;
    this.dateCreated = new Date(date);
    
    console.log(this);
    console.log("")
    
  }
}
