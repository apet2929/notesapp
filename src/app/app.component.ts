import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notesapp';
  notes = Array();
  hasNotes : boolean;

  ngOnInit() {

    let numNotes = +localStorage.getItem("numNotes");
    if(numNotes){
      this.hasNotes = true;
      for(let i = 0; i < numNotes; i++){
        this.notes.push(null)
      }
    } else {
      this.hasNotes = false;
      this.notes.push(null);
    }
  }

  reset(){
    localStorage.clear();
  }
}
