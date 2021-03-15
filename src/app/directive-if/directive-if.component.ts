import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-if',
  templateUrl: './directive-if.component.html',
  styleUrls: ['./directive-if.component.css']
})
export class DirectiveIFComponent implements OnInit {

  //Courses = [2,4];
  Courses = [];
  constructor() { }

  ngOnInit(): void {
   
  }

}
