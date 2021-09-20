import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() pPhone ="";
  public profile;
  constructor( public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // let userNumber = this.actRoute.snapshot.params.p;
    // let user = JSON.parse(localStorage.getItem('users'));
    // //let todos = this.todoService.getTodo();
    // console.log(userNumber)
    
    // let myUser= user.filter(user=>user.phone==userNumber);
    // this.profile=myUser[0];
    // console.log(this.profile);
    // this.profile.img= 'assets/'+this.profile.img;

   
    let user = JSON.parse(localStorage.getItem('users'));
    console.log(user);
    
    if(this.pPhone ==""){
      console.log('no profile');

    }else{
      console.log(this.pPhone);
      let myUser= user.filter(user=>user.phone==this.pPhone);
    this.profile=myUser[0];
    console.log(this.profile);
    this.profile.img= 'assets/'+this.profile.img;
    }
    


  }

}
