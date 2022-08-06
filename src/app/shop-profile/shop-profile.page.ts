import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.page.html',
  styleUrls: ['./shop-profile.page.scss'],
})
export class ShopProfilePage implements OnInit {

  shopId:any;
  shopDetail:any;
  min_order_amount:any;
  min_amount:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController) {
  }

  ngOnInit() {
  this.shopId = localStorage.getItem('fash_user_id');

    
  }
  
  ionViewWillEnter()
  {
  this.getvmDetails();
  }

  getvmDetails() {
  let profObj = {action:"getProfileDetails",shopId:this.shopId};
    this.util.showLoader();
    this.api.fetchShopDetails1((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
        if (response.status == true) 
        {
            this.shopDetail = response;
            //alert(JSON.stringify(this.shopDetail));
          }
        else 
        {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        } 
      }, 1000);

    }, profObj);
  }

  orderspag()
  {
  this.router.navigate(['editprofile']);
  }

  updateMinmumOrder()
  {
      //alert(this.min_amount);
  }

}
