import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() playerN:any;
  @Output() hello = new EventEmitter<any>();
  person={
    firstName:"Suraj",
    lastName:"Bhangale",
    salary:"25000"
  }
 
  constructor() { }

  ngOnInit() {
  }
  sendData(){
    this.hello.emit(this.person);
  }

}
