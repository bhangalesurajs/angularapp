import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  people:any[]=[
    {
      "name": 'jack',
      "country" : 'UK'
    },
    {
      "name": 'sumit',
      "country" : 'india'
    },
    {
      "name": 'joe',
      "country" : 'canada'
    },
    {
      "name": 'joe',
      "country" : 'india'
    }
  
  
  
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
