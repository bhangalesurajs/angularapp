import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css']
})
export class OnchangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//   selectedCountry: String = "--Choose Country--";
  
// 	Countries: Array<any> = [
// 		{ name: 'India', states: [ {name: 'Maharashtra', cities: ['Latur', 'Kolkata', 'Mumbai', 'Aurangabad']} , {name: 'Karnatka', cities: ['Bidar', 'Kalabuargi']}] },
// 		{ name: 'USA', states: [ {name: 'California', cities: ['Sacramento', 'Columbia']} ] }
// ];
  

//     states: Array<any>; 

// 	cities: Array<any>; 
	
// 	changeCountry(country) { 
// 		this.states = this.Countries.find(cntry => cntry.name === country).states;
// 	}

// 	changeState(state) {
// 		this.cities = this.Countries.find(cntry => cntry.name === this.selectedCountry).states.find(stat => stat.name === state).cities;
// 	}
selectedCountry: String = "--Choose Country--";
  
Countries: Array<any> = [
	{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
	{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
	{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
	{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
	{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
];

states: Array<any>; //Angular 8


cities: Array<any>; //Angular 8


changeCountry(country) { //Angular 8
	this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8	
}

changeState(state) { //Angular 8
	this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).states.find(stat => stat.name == state).cities; //Angular 8
	
}
	
}

