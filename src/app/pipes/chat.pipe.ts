import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chat'
})
export class ChatPipe implements PipeTransform {

  transform(chats: any[], searchText:any): unknown {
    if (!searchText) {
      return chats
    }else{
    searchText = searchText.toLowerCase();
        let filteredChats = chats.filter(it=>it.message.toLowerCase().includes(searchText))
        
        return filteredChats;
    }
  }

}




