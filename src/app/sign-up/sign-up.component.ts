import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public fb:FormBuilder, public router: Router) { }

  public userNew=[] ;
  
  public userForm= this.fb.group({
    fullName:['',[this.validateName, Validators.maxLength(40)]],
    address:['' ,[Validators.maxLength(200)]],
    userName:['', [this.validateuserName, Validators.maxLength(40)]],
    email:['',[this.validateEmail]],
    // phone:['080',[Validators.minLength(10), Validators.maxLength(15), validators.pattern(/^[0-9])]]
    phone:['080',[Validators.maxLength(11), this.validatephone]],
    img:['']
  });

  validateuserName(control: AbstractControl ) : {[key:string]:any} | null{
    let pattern = /^([a-zA-Z0-9]{1,50})$/;
    if(control.value){
      if (!pattern.test(control.value)) {
        return {"userNameErr":true}
      }else{
        return null;
      }
    }
  }
  
  validateName(control: AbstractControl ) : {[key:string]:any} | null{
    let pattern = /^([a-zA-Z\s]{1,50})$/;
    if (control.value) {

        if(!pattern.test(control.value)){
          return {"charErr":true}
        }
      // else if (control.value.length>50) {
      //   return {"maxlengthErr":true}
      // }
      else{
        return null
      }
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
  

  validateEmail(control:AbstractControl){
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
      if (control.value) {
        if (!pattern.test(control.value)) {
          return {emailError:true}
        }else{
          return null
        }
      }
  }
  ngOnInit(): void {

     let list  = JSON.parse(localStorage.getItem('users'));
     if(list){
      if (list.lenght>0) {
        this.userNew=[...this.userNew,list]
        }
       else{
       this.userNew=list;
      }
     }else{
       this.userNew=[]
     }
     
  }


  submit(){
      
        if(this.userForm.valid){
          let user = this.userForm.value;
          console.log(user.phone);
          console.log(this.userNew);

          let k = user.img.replace("C:\\fakepath\\", "");
          console.log(k);
          user.img=k;
          console.log(user)
         
          let m = this.userNew.filter((u,i)=>u.phone==user.phone);
          console.log(this.userNew)
            if (m.length>0) {
              alert('users with phone number exist')
            }else{
              this.userNew=[...this.userNew,user];
            localStorage.setItem('users',JSON.stringify(this.userNew));
            alert('you have succesfully register sign in to connect with friends')
            this.userForm.setValue({fullName:"", address:"", userName:"", email:"", phone:"", img:""});
            this.router.navigate([`/signin`])
            }
         
              }
              
        else{
          alert('please submit a valid form')
        }
  }

  logIn(){
    this.router.navigate([`/signin`])
  }
}
