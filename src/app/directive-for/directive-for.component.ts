import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  templateUrl: './directive-for.component.html',
  styleUrls: ['./directive-for.component.css']
})
export class DirectiveForComponent implements OnInit {
courses =[
{id:1,name:'Data Structure'},
{id:2,name:'Software Engineering'},
{id:3,name:'Electronics'},
{id:4,name:'Physics'}
]
  constructor() { }

  ngOnInit(): void {
  }
  AddNewCourse(){
    this.courses.push({id:5,name:'Maths'});
  }
  RemoveCourse(itemcourse){
    let index =  this.courses.indexOf(itemcourse);
    this.courses.splice(index,1);
  }
  ChangeCourse(itemcourse){
    itemcourse.name="Updated";
  }
}
