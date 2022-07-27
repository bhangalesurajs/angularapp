import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  username: string;

  userName ="Default";

  @Input() personName= "";
  @Output() villageName= new EventEmitter<any>();

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

   onClick(){
     alert(this.userName)
   }

   sendVillageName(){
     this.villageName.emit('Malegaon');
   }

}
