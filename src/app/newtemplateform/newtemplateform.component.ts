import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newtemplateform',
  templateUrl: './newtemplateform.component.html',
  styleUrls: ['./newtemplateform.component.css']
})
export class NewtemplateformComponent implements OnInit {

  minDate= new Date();

  schoolName:any[]= [
  {name:'D.E.S.HIGHSCHOOL DATAL'},
  {name:'JSPM WAGHOLI'},
  {name:'MOJHE COLLEGE PUNE'}]

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm){
    console.log(form);
  }
  OnReset(){
    alert('form stored to default values')
  }
  

}
