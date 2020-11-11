import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router ) { }

  public userLog=[];
  public userForm= this.fb.group({
    phone:['080',[Validators.maxLength(11), this.validatephone]]
  });

  ngOnInit(): void {
    let list  = JSON.parse(localStorage.getItem('users'));
     
      if (list) {
        this.userLog=list;
        }
       else{
       this.userLog=[];
      }
  }
  
  validatephone(control: AbstractControl ) : {[key:string]:any} | null{

    let pattern = /^([0-9]{4,11})$/;
    if (control.value) {

        if(!pattern.test(control.value)){
          return {"numErr":true}
        }
      // if (control.value) {
      //   if (control.value.length>15) {
      //     return {"maxlengthErr":true}
        }else{
          return null
        }
      }



      submit(){
      
        if(this.userForm.valid){
          let user = this.userForm.value;
          console.log(user.phone);
          console.log(this.userLog);
         
          let m = this.userLog.filter((u,i)=>u.phone==user.phone);
          console.log(this.userLog)
            if (m.length>0) {
              //this.router.navigate([`/todos/details/${id}`])
              localStorage.setItem('activeUser', JSON.stringify(m));
              this.router.navigate([`/chatpage`])
            }else{
              alert('user not found')
            }
         
              }
              
        else{
          alert('please enter a valid number')
        }
  }


    }

