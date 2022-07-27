import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  signUpForm: FormGroup;

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.signUpForm= new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null,[Validators.required])
    })
  }
  OnSignUp(){
    console.log(this.signUpForm);
    alert('Form Submitted Succesfully')
  }
  // ConPass(controls:FormControl){
  //   if((this.signUpForm.get('password').value) === (this.signUpForm.get('confirmPassword').value)){
  //     console.log('password is valid');
  //   }else{
  //     console.log('please reenter password correctly');
  //   }
  // }
  onPasswordChange() {
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
  
    } else {
      this.confirmPassword.setErrors({ mismatch: true });    
    }
  }
  
  // getting the form control elements
  get password(): AbstractControl {
    return this.signUpForm.controls['password'];
  }
  
  get confirmPassword(): AbstractControl {
    return this.signUpForm.controls['confirmPassword'];
  }
 
}
