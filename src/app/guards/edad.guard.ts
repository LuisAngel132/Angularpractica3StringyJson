import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router,ActivatedRoute} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class EdadGuard implements CanActivate {
  constructor(private router:Router,private route:ActivatedRoute) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.route){
    return true;
      }
return false;
  }

}
