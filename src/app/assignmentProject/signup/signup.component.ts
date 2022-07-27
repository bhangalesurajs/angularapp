import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { format } from 'url';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;
  submitted= false;

  constructor(private router : Router, private notification: NotificationService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.signUp= new FormGroup({
      'firstName': new FormControl(null,Validators.required),
      'lastName': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
      'confirmPassword': new FormControl(null)
    })
  }

  OnSubmit(){
    this.submitted= true;
    console.log(this.signUp.value);
    this.notification.showSuccess('Data Saved Sucessfully', 'Register')
  }

  onPasswordChange() {
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ mismatch: true });
    }
  }
  
  // getting the form control elements
  get password(): AbstractControl {
    return this.signUp.controls['password'];
  }
  
  get confirmPassword(): AbstractControl {
    return this.signUp.controls['confirmPassword'];
  }

  OnClick(){
    this.router.navigate(['./../login/'])
  }
}
