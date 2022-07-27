import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codemind',
  templateUrl: './codemind.component.html',
  styleUrls: ['./codemind.component.css']
})
export class CodemindComponent implements OnInit {

  name = "This mind";
  num1 = 10;
  num2 = 30;
  employeeCount: any;
    constructor() { }

  ngOnInit() {
  }
  print(){
    console.log("test data")
  }
  clickMe(event){
    console.log(event.target.value);
  }

}
