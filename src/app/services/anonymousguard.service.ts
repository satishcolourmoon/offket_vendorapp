import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnonymousguardService implements CanActivate {

  constructor(private navCtrl: NavController) { }
  canActivate() {
    let is_logged_in = localStorage.getItem('fash_user_id');
    if (is_logged_in) {
      let uType = localStorage.getItem('fash_user_type');
      if (uType && uType == 'visual_merchant') {
        let id = is_logged_in;
        this.navCtrl.navigateForward(['vm-dashboard', id]);
      }
      if (uType && uType == 'vendor') {
        let id = is_logged_in;
        this.navCtrl.navigateForward(['vendor-dashboard', id]);
      }
      return false;
    } else {
      return true;
    }
  }
}