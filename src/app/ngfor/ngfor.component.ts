import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title:string= 'Top 3 Bollywood Movies';
  movies: Movie[]=[
    {
      title:'3 Idiot', director:'Rajkumar', cast:'Amir',releaseDate:'2009'
    },
    {
      title:'Lagaan', director:'Ashutosh', cast:'Amir',releaseDate:'2000'
    },
    {
      title:'Tanhaji', director:'Om Raut', cast:'Ajay',releaseDate:'2021'
    }]

    Picture: Array<any> =[
      {
        name:'happy ending', director: 'amol', actor: 'sushant', releaseDate: '2019'
      },
      {
        name:'ending', director: 'pappu', actor: 'srk', releaseDate: '2222'
      }
    ]

  constructor() { }

  ngOnInit() {
  }

}
class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string; 
}


