import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public Allchat:ChatService ) { }
//public chat ={sender:"hello", senderTime:'17:23',  receiver:"how far my guy", receiverTime:"18:20"}
  public chat = {};
  public chats=[];
  public actUser=[];
  public myChats=[];
  public filterChat;
  public group=[];  

  @Input() receive='';
ngOnInit(): void {

   let use = JSON.parse(localStorage.getItem('activeUser'));
   this.actUser = use;
  
  
    this.Allchat.dataSource.subscribe(data =>{
      this.chats = data;
      let j = this.chats.filter(mes=>{
        if ((mes.sender==this.actUser[0].phone&&mes.receiver==this.receive)||
        (mes.sender==this.receive&&mes.receiver==this.actUser[0].phone)) {
          return mes;
          
        }
        else{
          return null
        }
      })
  
      this.myChats=j;
      
    })

    
    this.Allchat.groupSource.subscribe(data =>{
      if(this.receive=='group'){
      this.group = data;
      this.myChats=data;
      }

        console.log(data)
      })
    
  
    
      
    
    
  
      //this.myChats=j;
      
  

  
  }

   ngOnChanges(){

      if(this.receive!='group'){
        let j = this.chats.filter(mes=>{
          if ((mes.sender==this.actUser[0].phone&&mes.receiver==this.receive)||
          (mes.sender==this.receive&&mes.receiver==this.actUser[0].phone)) {
            return mes;
            
          }
        })
    
        console.log(j);
    
        let l = j.map(mes=>mes.sender==this.receive)
        console.log(l)
    
        this.myChats=j; 
      }else if(this.receive=='group'){

        this.Allchat.groupSource.subscribe(data =>{
          this.group = data;
          //this.myChats=data;
        
    
            console.log(data)
          })
          
          this.myChats=this.group;
          console.log(this.myChats)
      }
       
   }


   delete(c){
    let j = this.chats.filter(mes=>{
      if ((mes!==c)){
        return mes;
        
      }
    })
      console.log(j);
      localStorage.setItem('allMessages',JSON.stringify(j));
      this.Allchat.updateSource(j);
  }

}
