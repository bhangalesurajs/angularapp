import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  presentDate = new Date();

  value = 'This is pipe example';

  myObservable: any;
  price: number = 2000;

  jasonData = {
    id: 'one', name: 'codemind'
  }

  digits: number = 12456789;

  employees: any[] = [
    {
      id: '01', name: 'Suraj Bhangale',
      gender: 'Male'
    },
    {
      id: '02', name: 'Sourabh Patil',
      gender: 'Male'
    },
    {
      id: '03', name: 'Shradha Patil',
      gender: 'Female'
    },
    {
      id: '04', name: 'Preshita Randive',
      gender: 'Female'
    },
  ];

  // students = [{
  //   id: '04', name: 'Preshita Randive',
  //   gender: 'Female'
  // },
  // {
  //   id: '02', name: 'Sourabh Patil',
  //     gender: 'Male'
  // },
  // {
  //   id: '04', name: 'Preshita Randive',
  //   gender: 'Female'


  // }]
 


  constructor() { }

  ngOnInit() {
    this.myObservable = of('Some Text').pipe(
      delay(3000)
    )
  }

}  
