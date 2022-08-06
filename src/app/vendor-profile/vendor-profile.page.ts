import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.page.html',
  styleUrls: ['./vendor-profile.page.scss'],
})
export class VendorProfilePage implements OnInit {
  shopId:any;
  shopDetail:any;
  dashboard:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
    //this.getdashboardDetails();
    this.getvmDetails();
  }

  /* async getdashboardDetails() {
  let dashObj = {action:"dashboardDetails",vendor_id:this.shopId};
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchDashboard((response: any) => {
    loading.dismiss();
        if (response.status == true) 
        {
            this.dashboard = response;
        } 
        else 
        {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, dashObj);
  } */

  getvmDetails() {
  let dashboardObj = {action:"getProfileDetails",login_status:"vendor",shopId:this.shopId};
  //alert(JSON.stringify(dashboardObj));
    this.util.showLoader();
    this.api.fetchShopDetails((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
        if (response.status == true) 
        {
            this.shopDetail = response;
        } 
        else 
        {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 1000);

    }, dashboardObj);
  }

  orders()
  {
       this.router.navigate(['orders',{shopId:this.shopId}]);
  }

}
