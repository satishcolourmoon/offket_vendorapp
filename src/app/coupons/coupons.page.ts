import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
	shopId:any;
	coupons:any;
	nval:any;
  pack_type:any;
  coupon:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
  
  }
 ionViewWillEnter()
  {
   this.getpackageReport();
  this.getcoupons();
  }



 async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "vendor_package_for_count",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
          this.coupon = response.coupons;
    }, catObj);
  }

   async getcoupons() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "couponcodes", vendor_id: this.shopId }
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchCouponCodes((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.coupons = response.coupons;
          this.nval=true;
        } else {
        this.nval=false;
        this.coupons = [];
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, catObj);
  }

  addCoupon(coupon)
  {
      if(coupon==true)
      {
         this.router.navigate(['create-coupons',{id:'add'}]);
      }
      else
      {
        this.util.presentToast("Your Package Limit Exceeded ", 'danger', 'bottom', 2500);
         //this.router.navigate(['plans']);
      }
  }

  editCoupon(c)
  {
  		this.router.navigate(['create-coupons',{id:c.id,coupon_code:c.coupon_code,percentage:c.percentage,maximum_amount:c.maximum_amount,start_date:c.start_date,expiry_date:c.expiry_date,description:c.description,utilization:c.utilization,minimum_order_amount:c.minimum_order_amount}]);
  }


   async deleteCoupon(cid) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this coupon',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            let delvarObj = { action: "delete_coupon", cid: cid };
            
            this.api.deleteCoupon((response: any) => {
                //loading.dismiss();
                if (response.status == true) {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  this.ionViewWillEnter();
                }
                else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }

            }, delvarObj);
          }
        }
      ]
    });

    await alert.present();



  }


}
