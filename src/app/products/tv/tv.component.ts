import { Component, OnInit } from '@angular/core';
import { GobackService } from '../goback.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private getBack: GobackService) { }

  ngOnInit() {
  }

  goBack(){

    this.getBack.getBack();
  }

}
