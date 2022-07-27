import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {

  posts: any[];
  constructor(private _post:PostService) { }

  ngOnInit() {
    this._post.getPost().subscribe((res:any)=>{
      this.posts= res;
      // console.log(res);
    })
  }
  createPost(input: HTMLInputElement ){
   let post ={
     title: input.value
   };
   input.value='';
   
   this._post.createPost(post).subscribe((res: any)=>{
     post['id']= res.id;
     this.posts.splice(0, 0, post);
     console.log(res);
   })
  }

  updatePost(post){
    this._post.updatePost(post).subscribe((res: any)=>{
       console.log(res);
    })

  }

  deletePost(post){
    alert('test')
    this._post.delete(post.id).subscribe(res =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })

  }


}
