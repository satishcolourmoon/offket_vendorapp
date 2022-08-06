import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilService } from '../services/util.service';
import { MenuController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-vm-dashboard',
  templateUrl: './vm-dashboard.page.html',
  styleUrls: ['./vm-dashboard.page.scss'],
})
export class VmDashboardPage implements OnInit {
  public shops = [];
  public vmId;
  shops_count:any;
  dashboard:any;
  vm_id:any;
  constructor(private router: Router, private util: UtilService, private api: ApiService, private actRoute: ActivatedRoute, private menu : MenuController, private loadingCtrl: LoadingController) {
    this.vmId = this.actRoute.snapshot.paramMap.get('vmId');

  }
ionViewDidEnter() {
      // the root left menu should be disabled on this page
      this.menu.enable(true);
    }
  ngOnInit() {
  this.vm_id=localStorage.getItem('fash_user_id');
  this.getdashboardDetails();
    this.getshopLists();
  }
  viewShop(shopId) {
    this.router.navigate(['/vendor-profile', shopId]);
  }

  getshopLists() {
    let vmObj = { action: "shops_list", user_id: this.vmId }
    //this.util.showLoader();
    this.api.fetchShopLists((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
        if (response.status == true) {
          this.shops = response.shops;
          this.shops_count=response.shops_count;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 500);
        }
      }, 1000);

    }, vmObj);
  }

  async getdashboardDetails() {
  let dashObj = {action:"dashboardDetails",vm_id:this.vm_id};
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
  }
}
