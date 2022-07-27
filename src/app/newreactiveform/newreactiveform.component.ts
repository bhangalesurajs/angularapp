import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-newreactiveform',
  templateUrl: './newreactiveform.component.html',
  styleUrls: ['./newreactiveform.component.css']
})
export class NewreactiveformComponent implements OnInit {

  myAdmissionForm: FormGroup;
  submitted: boolean = false;

  genders = [{
    id: '1',
    value: 'Male'
  },
  {
    id: '2',
    value: 'Female'
  }]

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.myAdmissionForm = new FormGroup({
      'firstname': new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      'lastname': new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required)
    })
  }
  OnSubmit() {
    this.submitted = true;
    console.log(this.myAdmissionForm);
  }
}

