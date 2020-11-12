import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendFilter'
})
export class FriendFilterPipe implements PipeTransform {

  transform(list: any[], searchText: any): unknown {
    if (!searchText) {
      return list
    }else{
    searchText = searchText.toLowerCase();
        let filteredList = list.filter(it=>it.fullName.toLowerCase().includes(searchText))
        return filteredList;
    }
  }

}


