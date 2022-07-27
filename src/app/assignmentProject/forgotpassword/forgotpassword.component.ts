import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPassword: FormGroup;
  constructor(private notification: NotificationService) { 
    this.createForm()
  }

  ngOnInit() {
  }
  createForm(){
    this.forgotPassword= new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'mobileNumber': new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }

  OnSubmit(){
    this.notification.showSuccess('Please check your email/mobile', 'OTP Send')
  }

}
