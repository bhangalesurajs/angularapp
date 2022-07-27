import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GobackService {

  url= 'http://localhost:4200/products'

  constructor(private router: Router) { }

  getBack(){
    return this.router.navigate(['products'])
  }
}
