import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username;
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
