import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  data=[
    {"Name":"Manju","Age":21,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGhqdON4Rxa-rGgTn6bY10WdXlqjxsiLjtQ&usqp=CAU"},
    {"Name":"Raju","Age":11,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGhqdON4Rxa-rGgTn6bY10WdXlqjxsiLjtQ&usqp=CAU"},
    {"Name":"Sivani","Age":28,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGhqdON4Rxa-rGgTn6bY10WdXlqjxsiLjtQ&usqp=CAU"},
    {"Name":"Zyana","Age":32,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGhqdON4Rxa-rGgTn6bY10WdXlqjxsiLjtQ&usqp=CAU"}
    
  ]

}
