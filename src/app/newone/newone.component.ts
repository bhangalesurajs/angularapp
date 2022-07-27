import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent implements OnInit {

  selectTheProduct:string;
  constructor() { }

  ngOnInit() {
  }
  getTheDetail(value){
    console.log(value.target.value);
    this.selectTheProduct= value.target.value;
  
  }

}
