import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted= false;

  constructor(private router: Router, private notification: NotificationService, private toast: ToastrService) {
    this.createForm();

   }

  ngOnInit() {
  }

  createForm(){
    this.loginForm= new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

  // toaster.options={
  //   positionClass: 'toast-top-center'
  // };

  onSubmit(){
    this.submitted =true;
    console.log(this.loginForm);
    this.notification.showSuccess('', 'Logged In');

  }
  OnClick(){
    this.router.navigate(['./../signup/'])
  }
}
