import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsGuard implements CanActivate {

  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      let user= localStorage.getItem('activeUser');
      if (user) {
        return true;
      }
      else{
        this.router.navigate([`/home`])
      }
  }
  
}
