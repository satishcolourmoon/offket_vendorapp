import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {
	plans:any=[];
   offer_zone:any;
   shopId:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, private loadingCtrl: LoadingController, private menu : MenuController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
      this.menu.enable(true);
      this.getPlans();
      this.getshopDetails();
    }

  async getPlans() {
  this.shopId = localStorage.getItem('fash_user_id');

  let vendorObj = {action:"getPlans",shopId:this.shopId};
    this.api.fetchPlans((response: any) => {
      console.log(response);
      if (response.status == true) {
            this.plans= response.plans;
      }
    }, vendorObj);
  }

  viewPlan(pid,title)
  {
  	this.router.navigate(['subscriptions',{pid:pid,title:title}]);
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


}
