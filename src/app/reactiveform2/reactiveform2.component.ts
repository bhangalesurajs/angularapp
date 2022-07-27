import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-reactiveform2',
  templateUrl: './reactiveform2.component.html',
  styleUrls: ['./reactiveform2.component.css']
})
export class Reactiveform2Component implements OnInit {

  myAdmissionForm: FormGroup;
  submitted: boolean= false;
  selectedCountry: String= "Select Nationality";
  genders = [{
    id: '1',
    value: 'Male'
  },
  {
    id: '2',
    value: 'Female'
  }]

  Countries: Array<any>=[
		{ name: 'India', states: [ {name: 'Maharashtra', cities: ['Latur','Mumbai','Aurangabad']} , {name: 'Karnatka', cities: ['Bidar','Kalabuargi']}] },
		{ name: 'USA', states: [ {name: 'California', cities: ['Sacramento', 'Columbia']} ] }
];
  
  constructor(private notificationService: NotificationService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.myAdmissionForm= new FormGroup({
      'firstname': new FormControl(null, [Validators.required,Validators.maxLength(15)]),
      'lastname': new FormControl(null,[Validators.required,Validators.maxLength(15)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
      'mobileNumber': new FormControl(null),
      'nationality': new FormControl(null,Validators.required),
      'state': new FormControl(null,Validators.required),
      'city': new FormControl(null),
      'gender': new FormControl(null)

    })
  }
  OnSubmit(){
    this.submitted = true;
    console.log(this.myAdmissionForm); 

    this.notificationService.showError('Data not submitted successfully' , 'Registration');

      
  }
  
  states: Array<any>; 

	cities: Array<any>; 
	
	changeCountry(country) { 
		this.states = this.Countries.find(cntry => cntry.name === country).states;
	}

	changeState(state) {
		this.cities = this.Countries.find(cntry => cntry.name === this.selectedCountry).states.find(stat => stat.name === state).cities;
	}
  
}
