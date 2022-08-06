import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform,LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BrandfilterPage } from '../brandfilter/brandfilter.page';
@Component({
  selector: 'app-existingproduct',
  templateUrl: './existingproduct.page.html',
  styleUrls: ['./existingproduct.page.scss'],
})
export class ExistingproductPage implements OnInit {

 public sub_categories = [];
  currentSegment;
  catId:any;
  catName;
  products:any=[];
  shopId: any;
  nval: any;
  product:any;
  subcatid:any;

  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController, public alertController: AlertController,public modalController: ModalController) {
  }

  ngOnInit() {
    
  }

  

   ionViewWillEnter()
  {
    this.catId = this.actRoute.snapshot.paramMap.get('catId');
    this.subcatid = this.actRoute.snapshot.paramMap.get('subcatId');
    this.catName = this.actRoute.snapshot.paramMap.get('catName');

     this.shopId = localStorage.getItem('fash_user_id');
     this.getpackageReport();
     //this.getshopSubCategories();

     this.getSubCategoryProducts(this.subcatid, this.catId);
  }

getItems(ev: any) {
    let keyword = ev.target.value;
      if(keyword.length==0)
      {
          this.getSubCategoryProducts(this.subcatid, this.catId);
      }
      else if(keyword.length>0)
      {
           let catObj = { action:"search_clone_products",keyword: keyword,subcat_id: this.subcatid, shop_id: this.shopId }
            this.api.searchCloneProducts((response: any) => {
               if (response.status == true) {
                    this.products = response.product_list;
                    this.nval = true;
                  }
                  else {
                    this.nval = false;
                    this.products = [];
                    //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  }

            }, catObj);
      }
  }


 async getpackageReport() 
  {
  

    let catObj = { action: "vendor_package_for_count",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
        if(response.status == true) 
        {
          this.product = response.products;
        } 
        else 
        {
          this.product = 0;
           //this.router.navigate(['plans']);
        }

    }, catObj);
  }

 /* segmentChanged(event) {
    this.currentSegment = event.target.value;
    this.products = [];
    this.getSubCategoryProducts(this.currentSegment, this.catId);
  }*/


 /* async getshopSubCategories() {

    let subcatObj = { action: "getShopsubcategories", shopId: this.shopId };
    this.products = [];
    
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.getShopSubCategories((response: any) => {
    loading.dismiss();
        if (response.status == true) {
          this.sub_categories = response.subcategory_list;
          let defualtSubCatId = this.sub_categories[0].id;
          this.subcatid = this.sub_categories[0].id;
          let cat_id = this.sub_categories[0].cat_id;
          this.currentSegment = defualtSubCatId;
          this.getSubCategoryProducts(defualtSubCatId, cat_id);
        }
        else {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }


    }, subcatObj);
  } */

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

 async getSubCategoryProducts(SubCatId, cat_id) {
      let productObj = { action: "getexistingProducts",subcat_id: SubCatId, shop_id: this.shopId };
      let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
     this.products = [];
      this.api.fetchexistingProducts((response: any) => {
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
      message: 'Are you sure you want to clone this Product ?',
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
                    	let cloneObj = { action: "cloneNewProduct", pid:pid,shopId: this.shopId };
								    
								    this.api.cloneNewProduct((response: any) => {
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


  async filters(shopId,catId,subcatId) 
  {
    const modal = await this.modalController.create({
      component: BrandfilterPage,
      componentProps: { shopId: shopId,catId:catId,subcatId:subcatId }
    });
    modal.onDidDismiss().then((data) => {

        let json_data = data.data.json_data;
         if(json_data.length==0)
         {

         }
         else
         {

          let filterObj = {action:"clone_products_brand_filters",shopId: this.shopId, catId: this.catId,subcat_id:this.subcatid, json_data: json_data}
          //this.util.showLoader();
          this.api.productscloneBrandFilters((response: any) => {
            
          //this.util.hideLoader();

                if(response.status==true)
                {
                  this.products = response.product_list;
                   this.nval = true;
                }
                else if(response.status==false)
                {
                  this.products = [];
                   this.nval = false;
                }
                }, filterObj); 
         }

         
    });

    await modal.present();

  }


}