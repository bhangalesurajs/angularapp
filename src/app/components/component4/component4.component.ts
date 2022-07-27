import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.routes.navigate(['component2'])

  }

}
