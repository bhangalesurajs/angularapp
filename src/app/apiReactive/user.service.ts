import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  url='https://jsonplaceholder.typicode.com/users';

  getUserDetails():Observable<any>{
    return this.httpClient.get(this.url);
  }

}
