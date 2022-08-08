import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform,LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  catId:any;
  catName:any;
  products:any=[];
  shopId: any;
  nval: any;
  product:any;
  subcatId:any;
  brandsjson_data:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController, public alertController: AlertController,public modalController: ModalController) {
    this.catId = this.actRoute.snapshot.paramMap.get('catId');
    this.catName = this.actRoute.snapshot.paramMap.get('catName');
    this.shopId = this.actRoute.snapshot.paramMap.get('shop_id');
    this.subcatId= this.actRoute.snapshot.paramMap.get('subcatId');
  }

  ngOnInit() {
    
  }

  

   ionViewWillEnter()
  {
   this.getpackageReport();
   this.getSubCategoryProducts(this.subcatId, this.catId);
  }



 async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

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
      let productObj = { action: "getProducts", cat_id: this.catId, subcat_id: SubCatId, shop_id: this.shopId };
      let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
     this.products = [];
      this.api.fetchProducts((response: any) => {
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

  async deleteProduct(pid)
  {


   const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete Product , Product Image, Variant products, stock ?',
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
                                let delProdObj = { action: "deleteProduct",pid:pid };
                                            
                                            this.api.deleteProducts((response: any) => {
                                                if (response.status == true) {
                                                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                                  this.ionViewWillEnter();

                                                }
                                                else {
                                                 this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                                                }
                                            }, delProdObj);
          }
        }
      ]
    });

    await alert.present();


      
  }


requestProject(shopId,product,catId)
  {
      if(product==true)
      {
        this.router.navigate(['/request-new-product/'+shopId+'/'+catId]);
      }
      else
      {
        this.util.presentToast("Your Package Limit Exceeded ", 'danger', 'bottom', 2500);
        //this.router.navigate(['plans']);
      }
  }

  getItems(ev: any) {
    let keyword = ev.target.value;

      if(keyword.length==0)
      {
          this.getSubCategoryProducts(this.subcatId, this.catId);
      }
      else if(keyword.length>0)
      {
            let catObj = { action:"search_products",keyword: keyword,cat_id: this.catId,subcat_id: this.subcatId, shop_id:this.shopId }
      
          this.api.searchProductsList((response: any) => {
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


  doRefresh(event) {
          console.log('Refreshing Start');
          this.ngOnInit();
          
          setTimeout(() => {
            console.log('Refreshing Ended');
            event.target.complete();
          }, 2000);
        }



  async filters(shopId,catId,subcatId,brandsjson_data) 
  {
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: { shopId: shopId,catId:catId,subcatId:subcatId,brandsjson_data:brandsjson_data }
    });
    modal.onDidDismiss().then((data) => {

        let json_data = data.data.json_data;
          this.brandsjson_data = json_data;
         if(json_data.length==0 || json_data.length==undefined)
         {
          
         }
         else
         {

          let filterObj = {action:"products_brand_filters",shopId: this.shopId, catId: this.catId,subcat_id:this.subcatId, json_data: json_data}

          //this.util.showLoader();
          this.api.productsBrandFilters((response: any) => {
              this.catId = this.actRoute.snapshot.paramMap.get('catId');
              this.catName = this.actRoute.snapshot.paramMap.get('catName');
              this.shopId = this.actRoute.snapshot.paramMap.get('shop_id');
              this.subcatId= this.actRoute.snapshot.paramMap.get('subcatId');

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
