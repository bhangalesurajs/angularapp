import { Component, OnInit } from '@angular/core';
import { GobackService } from '../goback.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {

  constructor(private getBack: GobackService) { }

  ngOnInit() {
  }

  goBack(){
    this.getBack.getBack();
  }

}
