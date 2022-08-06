import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-offer-banners',
  templateUrl: './offer-banners.page.html',
  styleUrls: ['./offer-banners.page.scss'],
})
export class OfferBannersPage implements OnInit {
	shopId:any;
	bannerslist:any;
	nval:any;
  image:any;
  banners_count:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
  	
  }
ionViewWillEnter()
  {
    this.getBanners();
    this.getpackageReport();
  }

  

  async getBanners() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "shopbanners",vendor_id:this.shopId }
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchBanners((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.bannerslist = response.bannerslist;
          this.nval=true;
        } else {
        this.nval=false;
        this.bannerslist = [];
        this.image=response.image;
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, catObj);
  }




  async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "vendor_package_for_count",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
        if (response.status == true) 
        {
          this.banners_count = response.banners;
        } 
        else 
        {
        this.banners_count =response.banners;
          //this.router.navigate(['plans']);
        }

    }, catObj);
  }


  addBanner(banners_count)
  {
      if(banners_count==true)
      {
          this.router.navigate(['create-banners',{id:'add',image:''}]);
      }
      else
      {
          this.router.navigate(['plans']);
      }
  }

  editBanner(bid,image,title,imagefile)
  {
      this.router.navigate(['create-banners',{id:bid,image:image,title:title,imagefile:imagefile}]);
  }

  async deleteBanner(cid)
  {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this banner',
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
            let delvarObj = { action: "delete_banner", cid: cid };
            
            this.api.deleteBanner((response: any) => {
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
