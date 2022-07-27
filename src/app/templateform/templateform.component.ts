import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  defaultValue = 'HTML';
  defaultGender = 'Male';

  submitted: boolean= false;
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ];

  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  };

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    console.log(form);
 
    //Login = form.value
     // Class Login 
    // API   Login(Login) 
    // GetGendersData();
    //var data = GetGendersData();
   // this.genders = data ;
   this.formData.username = form.value.username;
   this.formData.email = form.value.email;
   this.formData.course = form.value.course;
   this.formData.gender = form.value.gender;
  }

  Cancel() {
    alert('cancel');
  }
}


