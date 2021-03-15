import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-component',
  templateUrl: './ngclass-component.component.html',
  styleUrls: ['./ngclass-component.component.css']
})
export class NGClassComponentComponent implements OnInit {
isSelected=true;
canSave = true;
task={
  title: "Review Application",
  assignee: null
  //{    name: "Farrukh Saleem"  }
}
  constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
    this.canSave = !(this.canSave);
  }
}
