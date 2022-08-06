import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform,LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-existingoffers',
  templateUrl: './existingoffers.page.html',
  styleUrls: ['./existingoffers.page.scss'],
})
export class ExistingoffersPage implements OnInit {
 public sub_categories = [];
  currentSegment;
  catId;
  catName;
  products:any=[];
  shopId: any;
  nval: any;
  product:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController, public alertController: AlertController) {
  }

  ngOnInit() {
    
  }

  

   ionViewWillEnter()
  {
     this.shopId = localStorage.getItem('fash_user_id');
     this.getpackageReport();
     this.getshopSubCategories();
  }



 async getpackageReport() 
  {
  

    let catObj = { action: "vendor_package_for_count",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
        if(response.status == true) 
        {
          this.product = response.offers;
        } 
        else 
        {
          this.product = 0;
           //this.router.navigate(['plans']);
        }

    }, catObj);
  }

  segmentChanged(event) {
    this.currentSegment = event.target.value;
    this.products = [];
    this.getCategoryProducts(this.currentSegment);
  }


  async getshopSubCategories() {

    let subcatObj = { action: "getShopOffercategories", shopId: this.shopId };
    this.products = [];
    
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.fetchShopOffercategories((response: any) => {
    loading.dismiss();
        if (response.status == true) {
          this.sub_categories = response.subcategory_list;
          let defualtSubCatId = this.sub_categories[0].id;
			this.currentSegment = defualtSubCatId;
          this.getCategoryProducts(defualtSubCatId);
        }
        else {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }


    }, subcatObj);
  }

  editProduct(pid, shop_id) {
    this.router.navigate(['editproduct', { pid: pid, shop_id: shop_id }]);

  }

  viewProduct(pid) {
    this.router.navigate(['productdetails', { pid: pid }]);
  }

  goProduct()
  {
    this.router.navigate(['request-new-product', { shopId: this.shopId }]);
  }


  viewlinkproduct(pid) {
    this.router.navigate(['linkproducts', { pid: pid }]);
  }


  addVariants(pid) {
    this.router.navigate(['addvariant', { pid: pid }]);
  }

 async getCategoryProducts(SubCatId) {
      let productObj = { action: "getexistingOffers",cat_id: SubCatId, shop_id: this.shopId };
      let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
     this.products = [];
      this.api.fetchexistingOffers((response: any) => {
        loading.dismiss();
          if (response.status == true) {
            this.products = response.product_list;
            this.nval = true;
          }
          else {
            this.nval = false;
            //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
          }
      }, productObj);


  }



  async cloneProduct(pid) {

const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to clone this Offer ?',
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
                    	let cloneObj = { action: "cloneNewOffer", pid:pid,shopId: this.shopId };
								    
								    this.api.cloneNewOffer((response: any) => {
								        if (response.status == true) {
								          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                          this.ionViewWillEnter();
								        }
								        else {
								          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
								        }


								    }, cloneObj);            
          }
        }
      ]
    });

    await alert.present();

    
  }



}