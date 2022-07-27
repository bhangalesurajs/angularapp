import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { $ } from 'protractor';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-newtest',
  templateUrl: './newtest.component.html',
  styleUrls: ['./newtest.component.css']
})
export class NewtestComponent implements OnInit {

  myTestForm: FormGroup;

  selectedCountry: string;

  states: Array<any>;

  cities: Array<any>;

  genders=[
    {
      id: '01',
      value: 'Male'
    },
    {
      id: '02',
      value: 'Female' 
    },
    {
      id: '03',
      value: 'Other'

    }
  ]

  Countries: Array<any> = [
    { name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
    { name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
    { name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
    { name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
    { name: 'India', states: [ {name: 'Maharastra', cities: ['Mumbai', 'Pune', 'Aurangad', 'Jalgaon']},{name: 'Gujrat', cities: ['Ahmedabad', 'Vapi', 'Badoda']} ] },
  ];
  

  constructor(private testService: TestserviceService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.myTestForm= new FormGroup({
      'username': new FormControl("Enter User Name",[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'mobileNumber': new FormControl(null,[Validators.required,Validators.minLength(10)]),
      'email': new FormControl("Enter email ID",[Validators.required,Validators.email]),
      'selectCountry': new FormControl(null),
      'selectState': new FormControl(null),
      'selectCity': new FormControl(null),
      'pincode': new FormControl(null,[Validators.required,Validators.minLength(6)])
    })
  }

  changeCountry(country){
    this.states= this.Countries.find(cnty=> cnty.name == country).states
  }

  changeState(state){
    this.cities= this.Countries.find(cnty=> cnty.name == this.selectedCountry).states.find(sta=> sta.name == state).cities
  }

  OnClick(){
    this.testService.getAlert('Data Saved','Done')
    
  }
}
