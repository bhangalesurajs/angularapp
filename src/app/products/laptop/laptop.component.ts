import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GobackService } from '../goback.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor(private router: Router, private getBack: GobackService ) { }

  ngOnInit() {

  }
 
  // goBack(){

  //   this.router.navigate(['products'])
  // }
   goBack(){

    this.getBack.getBack();
  }
}
 