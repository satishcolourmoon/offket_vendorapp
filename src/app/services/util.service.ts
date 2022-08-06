import { Injectable } from '@angular/core';
import { LoadingController, ToastController, ModalController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public loadingSpinner: any;
  constructor(private loadingController: LoadingController,
    private toastctrl: ToastController) { }


  async showLoader() {
    this.loadingSpinner = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await this.loadingSpinner.present();
  }

  hideLoader() {
    if (this.loadingSpinner) {
      this.loadingSpinner.dismiss();
    }
    return;
  }

  async presentToast(message: any, color: any = 'dark', position: any = 'bottom', duration = 2500) {
    const toast = await this.toastctrl.create({
      message: message,
      duration: duration,
      position: position,
      color: color
    });
    toast.present();
  }

  getVendorId() {
    let id = localStorage.getItem('fash_user_id');
    let uType = localStorage.getItem('fash_user_type');
    if (uType == 'vendor' && id != null && id != undefined) {
      return id;
    } else {
      return null;
    }
  }

  managetoken() {
    let token = localStorage.getItem('token');
    if (token != null && token != undefined) {
      return token;
    } else {
      return null;
    }
  }
  getVisualMerchantId() {
    let id = localStorage.getItem('fash_user_id');
    let uType = localStorage.getItem('fash_user_type');
    if (uType == 'visual_merchant' && id != null && id != undefined) {
      return id;
    } else {
      return null;
    }
  }

}
