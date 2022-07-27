import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userDetail:any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserDetails().subscribe(data=>this.userDetail=data);
    console.log('USER DETAILS',this.userDetail)

  }

}
