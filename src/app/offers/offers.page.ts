import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, AlertController,MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  shopId:any;
	offers:any;
	nval:any;
  image:any;
  banners_count:any;
  offer_zone:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController, public alertController: AlertController, private menu : MenuController) { }

  ngOnInit() {
  	
  }
ionViewWillEnter()
  {
    this.getBanners();
    this.getpackageReport();
  this.getshopDetails();
  }

  async getshopDetails() {
   this.shopId = localStorage.getItem('fash_user_id');
  let dashboardObj = {action:"getProfileDetails",login_status:"vendor",shopId:this.shopId};
    this.api.fetchShopDetails((response: any) => {
    //alert(JSON.stringify(response));
        if (response.status == true) 
        {
            this.offer_zone= response.offer_zone;
            if(this.offer_zone=='yes')
            {
              this.menu.enable(false);
            }
            else
            {
            this.menu.enable(true);
            }


        } 
        else 
        {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, dashboardObj);
  }



  async getBanners() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "getoffers",vendor_id:this.shopId }
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchOffers((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.offers = response.offers;
          this.nval=true;
        } else {
        this.nval=false;
        this.offers = [];
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
          this.banners_count = response.offers;
        } 
        else 
        {
        this.banners_count =response.offers;
          //this.router.navigate(['plans']);
        }

    }, catObj);
  }


  addBanner(banners_count)
  {
      if(banners_count==true)
      {
          this.router.navigate(['addoffers',{id:'add',image:''}]);
      }
      else
      {
          this.util.presentToast("Your Package Limit Exceeded ", 'danger', 'bottom', 2500);
          //this.router.navigate(['plans']);
      }
  }

  editBanner(bid,image,title,imagefile,cat_id,start_date,end_date)
  {
      this.router.navigate(['addoffers',{id:bid,image:image,title:title,imagefile:imagefile,cat_id:cat_id,start_date:start_date,end_date:end_date}]);
  }

  async deleteBanner(cid)
  {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this Offer',
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
            let delvarObj = { action: "delete_offer", cid: cid };
            
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

