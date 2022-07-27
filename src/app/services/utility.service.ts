import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url: string;
  urlPost = 'https://jsonplaceholder.typicode.com/posts';

  // username= new Subject<any>();

  username= new BehaviorSubject("codemind");

  product =[
    {name: 'Laptop', id: '001'},
    {name: 'Mobile', id: '002'},
    {name: 'TV', id: '003'},
    {name: 'Desktop', id: '004'}
  ]

  users=[
    {name: 'Suraj', id:'001', gender: 'Male'},
    {name: 'Shubham', id:'002', gender: 'Male'},
    {name: 'Shradha', id:'003', gender: 'Female'},
    
  ]
  
  constructor(private httpClient: HttpClient) { 
    this.url= 'https://jsonplaceholder.typicode.com';
  }

  getPost():Observable<any> {
    return this.httpClient.get(this.urlPost);
  }
  
  getPostByID(): Observable<any> {
    let id:number=1;
    let endPoint= "/posts/"+ id;
    return this.httpClient.get(this.url + endPoint);
  }

  createPost(title):Observable<any> {
    let endPoint= "/posts";
    return this.httpClient.post(this.url + endPoint,title)
  }
}

