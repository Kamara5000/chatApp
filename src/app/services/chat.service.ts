import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
// public savedMessage = [];
//   ngOnInit( ): void {
//     let list = JSON.parse(localStorage.getItem('allMessages'));
//     if (list) {
//       this.savedMessage = list;
//     }else{
//       this.savedMessage=[];
//     }
//   }
   
  public dataSource : BehaviorSubject<[]> = new BehaviorSubject(JSON.parse(localStorage.getItem('allMessages')));
  
  
  public updateSource(nam){
   
    this.dataSource.next(nam);
  }



  
}




