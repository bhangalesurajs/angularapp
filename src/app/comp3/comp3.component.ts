import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
