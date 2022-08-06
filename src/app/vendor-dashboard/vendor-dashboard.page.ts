import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.page.html',
  styleUrls: ['./vendor-dashboard.page.scss'],
})
export class VendorDashboardPage implements OnInit {
 shopId:any;
  shopDetail:any;
  name: string;
  dashboard:any;
  status:any;
  orders:any;
  tokenId:any;
  products:any;
  banners:any;
  coupons:any;
  pack_type:any;
  expiry_date:any;
  showbutton:any;
  showstatus:any;
  offer_zone:any;

  isLoggedIn:any;
    userType:any;

    mobile:any;
    image:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, private loadingCtrl: LoadingController, private menu : MenuController) 
    {
      this.name = localStorage.getItem('name') ? localStorage.getItem('name') : '';

      this.shopId = localStorage.getItem('fash_user_id');

      this.tokenId = localStorage.getItem('token');
    }


     viewPlan()
  {
    this.router.navigate(['plans']);
  }

  ionViewDidEnter() {
      // the root left menu should be disabled on this page
      //this.menu.enable(true);
      this.getvendorStatus();
      this.getpackageReport();
      this.vendorPack();
       this.getshopDetails();
    }

    vendorPack()
    {
      this.shopId = localStorage.getItem('fash_user_id');

      let pObj = { action: "vendor_currentpackage",vendor_id:this.shopId }
      this.api.vendorCurrentPackage((response: any) => {

          if(response.status == true) 
          {
            this.expiry_date = response.expiry_date;
            this.showstatus = true;
          } 
          else if(response.status == false) 
          {
            this.showstatus = false;
            this.showbutton = response.message;
          }

      }, pObj);
    }

    doRefresh(event) {
          console.log('Refreshing Start');
          this.ngOnInit();
          
          setTimeout(() => {
            console.log('Refreshing Ended');
            event.target.complete();
          }, 2000);
        }



    async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "vendor_package",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {

        if(response.status == true) 
        {
          this.pack_type = response.status;
          this.banners = response.banners;
          this.products = response.products;
          this.coupons = response.coupons;
        } 
        else 
        {
          this.pack_type = response.status;
        }

    }, catObj);
  }

  ngOnInit() {
    
   
    this.getdashboardDetails();
    
  }

   async getvendorStatus() {
  let vendorObj = {action:"getVendorStatus",shopId:this.shopId,tokenId:this.tokenId};
    this.api.fetchVendorStatus((response: any) => {
            this.status = response.status; 
            this.orders= response.orders;
    }, vendorObj);
  }

  async getshopDetails() {
  let dashboardObj = {action:"getProfileDetails",login_status:"vendor",shopId:this.shopId};
    this.api.fetchShopDetails((response: any) => {
    //alert(JSON.stringify(response));
        if (response.status == true) 
        {
            this.shopDetail = response;
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

  async getData()
  {
      let statObj = {action:"ChangeVendorStatus",login_status:"vendor",shopId:this.shopId,status:this.status};
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.changeVendorStatus((response: any) => {
      loading.dismiss();
        if (response.status == true) 
        {
            if(this.status==true)
            {
              this.util.presentToast(response.message, 'success', 'bottom', 2500);
            }
            else if(this.status==false)
            {
              this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            }
           
           this.getvendorStatus();
        } 
        else 
        {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, statObj);
  }


  async getdashboardDetails() {
  let dashObj = {action:"dashboardDetails",vendor_id:localStorage.getItem('fash_user_id')};
    /*let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();*/
    this.api.fetchDashboard((response: any) => {
    //loading.dismiss();
        if (response.status == true) 
        {
            this.dashboard = response;
        } 
        else 
        {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, dashObj);
  }

  orderspag()
  {
    this.router.navigate(['orders']);
  }

  renewal()
  {
    this.router.navigate(['plans']);
  }
  returnorders()
  {
    this.router.navigate(['exchange']);
  }

  addProduct(products,user_id)
  {
    if(products>0)
    {
      this.router.navigate(['/request-new-product/'+this.shopId+"/"+user_id]);
    }
    else
    {
      this.router.navigate(['plans']);
    }
  }

  goReview(vendor_id,pack_type)
  {
    if(pack_type==false)
    {
      this.router.navigate(['plans']);
    }
    else
    {
      this.router.navigate(['userreviews',{vendor_id:vendor_id}]);
    }
  }

gotoPageproducts(vendor_id,products,pack_type )
  {
   this.router.navigate(['categories/'+vendor_id]);
    /*if(pack_type==false)
    {
      this.router.navigate(['plans']);
    }
    else
    {
          if(products>0)
          {
              this.router.navigate(['categories/'+vendor_id]);
          }
          else 
          {
              this.router.navigate(['plans']);
          }
    } */
  }


  gotoorderPage(pack_type)
  {
  if(pack_type==false)
  {
    this.router.navigate(['plans']);
  }
  else
  {
    this.router.navigate(['orders']);
  }
    
  }

  gotosalesPage(pack_type)
  {
      if(pack_type==false)
      {
         this.router.navigate(['plans']);
      }
      else
      {
         this.router.navigate(['payouts-commission']);
      }
  }

  goBids()
  {
    this.router.navigate(['bid-list']);
  }



   logout() {

    localStorage.removeItem('fash_user_id');
    localStorage.removeItem('fash_user_type');
    localStorage.removeItem('name');
    localStorage.removeItem('mobile');
    localStorage.removeItem('image');
    this.isLoggedIn = false;
    this.userType = '';
    this.name = '';
    this.mobile = '';
    this.image = '';
    this.router.navigate(['/login'], {
      state: {}
    });
  }

}
