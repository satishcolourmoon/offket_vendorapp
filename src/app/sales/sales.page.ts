import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  sales: any;
  nval: any;
  sdate: any;
  vendor_id: any;
  shopId:any;
  pack_type:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService) {
    this.vendor_id = localStorage.getItem('fash_user_id');
   
  }


   ionViewWillEnter()
  {
   this.getpackageReport();
   this.salesReport();
  }



 async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "vendor_package",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
        if(response.status == true) 
        {
          this.pack_type = response.status;
        } 
        else 
        {
           this.router.navigate(['plans']);
        }

    }, catObj);
  }


  async salesReport() {

    let salesObj = { action: "getsalesReport", vendor_id: this.vendor_id };
    let loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Please wait',
    });
    loading.present();

    this.api.fetchSalesReport((response: any) => {
      loading.dismiss();
      if (response.status == true) {
        this.sales = response.orders;
        this.nval = true;
      }
      else {
        this.nval = false;
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, salesObj);
  }


  async getReport() {
  if(this.sdate=='' || this.sdate==undefined)
  {
      this.util.presentToast("Select Date", 'danger', 'middle', 2500);
  }
  else
  {
            let reportObj = { action: "getDatewisesalesReport", vendor_id: this.vendor_id, sdate: this.sdate };

            let loading = await this.loadingCtrl.create({
              spinner: 'circles',
              message: 'Please wait',
            });
            loading.present();
            this.api.getDatewisesalesReport((response: any) => {
              loading.dismiss();
              if (response.status == true) {
                this.sales = response.orders;
                this.nval = true;
              }
              else {
                this.nval = false;
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }

            }, reportObj);
    }
  }


  gopage(oid) {
    this.router.navigate(['orderdetails', { oid: oid }]);
  }
  ngOnInit() {
  }

}
