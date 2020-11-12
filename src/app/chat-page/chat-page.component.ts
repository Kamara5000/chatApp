import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor(public chat:ChatService, public router: Router) { }

  public activeUsers=[];
  public AllMessages=[];
  public receiver='';
  public mess;
  public active;
  public friend='';
  public display = false;
  public imgPath;
  public filterText;
  

  public chatSent;
  
  ngOnInit(): void {

      let users = JSON.parse(localStorage.getItem('users'));
      let online = JSON.parse(localStorage.getItem('activeUser'));
      this.active = online[0];
      let myFriend = users.filter(user=>user.phone !==this.active.phone);

      this.activeUsers=myFriend;
      
      this.activeUsers.forEach((user)=>{

        {
         user.img = 'assets/'+user.img;
             console.log(user.img)        
        }
    
    
      })

      console.log(this.activeUsers);
      console.log(this.active)

      



      let All =  JSON.parse(localStorage.getItem('allMessages'));
        if (All) {
          this.AllMessages = All;
        }
        
      
        this.chat.dataSource.subscribe(data =>{
        this.chatSent = data;

      })

      
  }


  setMessage(m){
   if(m!='group'){
    this.receiver= m.phone;
    this.friend=m

    

  this.AllMessages.forEach((mes)=>{

    if ((mes.receiver==this.active.phone && mes.sender==m.phone)){
     mes.seen = true;
         console.log(mes.seen)        
    }


  })
   console.log(this.AllMessages)

   localStorage.setItem('allMessages',JSON.stringify(this.AllMessages));
   this.chat.updateSource(this.AllMessages);
 

    this.display=true;
    this.imgPath= m.img;
    console.log(this.imgPath)
     



    
   }else if(m==='group'){
      this.receiver='group'
   }
    
    

  }





  send(){

    let d = new Date();
    let time = d.getHours() +':' + d.getUTCMinutes();
    
    if(this.receiver!='group'){
      
     
   
    //console.log(online)
   
    let myChat = {sender:this.active.phone, receiver:this.receiver, message:this.mess, time:time, seen:false}
   this.AllMessages=[...this.AllMessages,myChat];
   //console.log(this.AllMessages);
    
    localStorage.setItem('allMessages',JSON.stringify(this.AllMessages));
  this.chat.updateSource(this.AllMessages);

   this.mess='';

    }else if(this.receiver=='group'){
        let group = JSON.parse(localStorage.getItem('groupMessages'));
        let myChat = {sender:this.active.phone, receiver:'group', message:this.mess, time:time, seen:false};
        if(group){
          let mygroup = group;
          mygroup=[...mygroup,myChat];
          localStorage.setItem('groupMessages',JSON.stringify(mygroup));
          this.chat.updateGroupSource(mygroup);
        }else{
          let mygroup=group;
          mygroup =[...mygroup,myChat]
          localStorage.setItem('groupMessages',JSON.stringify(mygroup));
          this.chat.updateGroupSource(mygroup)
        }
        this.mess='';
    }
    
  }


  profile(p){
    this.router.navigate([`/profile/${p.phone}`])
  }



}



