import { Component, OnInit } from '@angular/core';
import { GobackService } from '../goback.service';

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  constructor(private getBack: GobackService) { }

  ngOnInit() {
  }

  goBack(){

    this.getBack.getBack();
  }

}
