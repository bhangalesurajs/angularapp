import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  username: string;
  constructor(private utilityService: UtilityService) {
    this.utilityService.username.subscribe(res =>{
      this.username = res
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    this.utilityService.username.next(uname.value);
   }
}
