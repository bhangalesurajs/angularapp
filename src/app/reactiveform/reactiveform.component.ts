import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  
  myReactiveForm: FormGroup;
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

  notAllowedNames = ['Codemind', 'Technology'];
  
  constructor(private notificationService: NotificationService) {
    this.crateForm();
   }

  ngOnInit() {
  }
  crateForm(){
    this.myReactiveForm=new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required,Validators.maxLength(10),this.NaNames.bind(this)]),
        'email': new FormControl(null, [Validators.required,Validators.email],this.NaEmails)
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })
    setTimeout(() => {
      this.myReactiveForm.setValue({
        'userDetails': {
          'username': 'codemind1252',
          'email': 'codemindtechnology@gmail.com'
        },
        'course': 'HTML',
        'gender': 'Male',
        'skills': [
          'AngularDevelpoer'
        ]
      })
    }, 5000)


    

  }
  OnSubmit(){
    this.submitted = true;
    console.log(this.myReactiveForm);   
    this.notificationService.showSuccess('Data Succesfully Save', 'Required');
  }
  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required))
   }
   OnRemove() {
    (<FormArray> this.myReactiveForm.get('skills')).removeAt(length-1);
   }
   NaNames(control: FormControl){
     if (this.notAllowedNames.indexOf(control.value) !== -1) {
       return {'nameIsNotAllowd': true}
     }
   }
   NaEmails(control: FormControl): Promise<any>|Observable<any>{
     const myResponse= new Promise<any>((resolve,reject) =>{
       setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
         } else{
           resolve(null)
         }
         
       }, 5000);
       
       
     })
     return myResponse;
   }

   
}
