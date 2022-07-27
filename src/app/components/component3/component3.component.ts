import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.routes.navigate(['component2'])

  }
}
