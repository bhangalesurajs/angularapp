import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, interval, of, Subscription, timer } from 'rxjs';
import { NotificationService } from './notification.service';
import { UtilityService } from './services/utility.service';
import { dematerialize, filter, map, mergeAll, mergeMap, take, takeLast, takeUntil, toArray } from 'rxjs/operators';
import { Comp4Component } from './comp4/comp4.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  myName ="Shradha Bhangale";

  user = "Suraj"; //@viewChild eg.
  @ViewChild('box', {static:true}) box: ElementRef;
  @ViewChild(Comp4Component, {static: true}) child: Comp4Component;

  
  minDate = new Date();
  products: {};
  sub1 : Subscription;

  getElementTitle:[];


   title = 'angularapp';
  // plotName="say hello to everyone";
  
  PlayerRecords: any= [
    {playerName:"Rohit", runs:"10000", team: "Mumbai Indians"},
    {playerName:"Dhoni", runs:"25000", team: "CSK"}
  ]
  // person={
  //   personN:"hitman",
  //   age: 30,
  // }

  randomNames=[ 'Suraj', 'Codemind', 'Angular', 'HTML' ]

  username;

  private ExampleObject : {name: string, email?: string}
  constructor(private notificationService: NotificationService, private utilityService: UtilityService ) {
    
    this.utilityService.username.subscribe(res =>{
      this.username= res;
    })
    this.ExampleObject= {
      name: 'Codemind',
      email: 'codemindtechnology@gnail.com'
    }
  }
 
  


  ngOnInit(): void {
    // this.products=this.utilityService.product;
    // this.utilityService.getPost().subscribe(data=> {
    //   console.log(data);
    //   this.getElementTitle= data;
    // })
  //   this.utilityService.getPostByID().subscribe(data => {console.log('Post User',data);
  //   // this.products= data;
  // });
  // this.utilityService.createPost("this is angular ui dev batch")
  // .subscribe(res=> {
  //   console.log('my post method',res)
  // }
  // )

//   const broadcastVideo =interval(1000);

//  this.sub1 = broadcastVideo.pipe(
//    map(data => data * 2)
//  ) .subscribe(res=>{
//     console.log(res);
//   })

//   setTimeout(() => {
//     this.sub1.unsubscribe();
//   }, 10000);

// const data = from(this.utilityService.product);

// data.pipe(
//   map(data => data.name)
// ).subscribe(res=>{
//   console.log(res);
// })

// this.utilityService.getPost().subscribe(res=>{
//   console.log(res);
// })

// const data = from(this.utilityService.getPost());
// data.pipe(
//   map(data=>data.forEach((element)=>{
//     console.log('title='+element.title)
//   }))
// ).subscribe(res=>res)



// const source=from(this.utilityService.users);

// source.pipe(
//   filter(user=> user.gender === 'Male')
// ).subscribe(result =>{
//   console.log('user =>', result);
// })

// const data= from(this.randomNames);

// data.pipe(
//   takeLast(2)
// ).subscribe(result=>{
//   console.log('take=>',result);
// })

// const source= interval(1000);

// let condition = timer(5000);
// source.pipe(
//   takeUntil(condition)
// ).subscribe(result=>{
//   console.log('Take Until',result);
// })

// const source= from(['comedy','technology','news']);

// source.pipe(
//   mergeMap(res=>this.getData(res))
// ).subscribe(res=>{
//   console.log(res);
// })


}
// getData(data){
//  return of(data + ' Video Uploaded'); 
// }

 

  // getData(value){
  //   console.log(value.firstName);
  //   console.log(value.lastName);
  //   console.log(value.salary);
  // }
  // isActive:boolean=false;
  // isDeactivate: boolean=false;
  // msg='From Parent';
  // comp: boolean= true;
  // destroy(){
  //   this.comp= false;
  // }
  OnSubmit(){
    this.notificationService.showSuccess('data submitted', 'registration');
  }

  changeName(){
    this.ExampleObject.name= 'Angular UI Develpoer';
  }

  changeObject(){
    this.ExampleObject={
      name: 'New Techonology',
      email: 'codemindtest@gmail.com'
    }
  }
  ngAfterViewInit(): void {
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor="gray"
    console.log(this.child);
  }

  changeUserName(){
    this.child.userName = 'its change';

  }

  changeAlert(){     //@viewchhild
    this.child.onClick();
  }
  gotVillage(value){
    alert(value);
  }
}
