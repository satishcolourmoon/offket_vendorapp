import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private navCtrl: NavController) { }

  canActivate() {
    let is_logged_in = localStorage.getItem('fash_user_id');
    if (!is_logged_in) {
      this.navCtrl.navigateForward('/login');
      return false;
    } else {
    //this.navCtrl.navigateForward('/vendor-dashboard/'+is_logged_in);
      return true;
    }
  }

}
