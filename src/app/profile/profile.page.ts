import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public shopId;
  public shopDetail = {};
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController) {
  }

  ngOnInit() {
    this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
    this.getshopDetails();
  }

  getshopDetails() {
    this.util.showLoader();
    this.api.fetchShopDetails((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
        if (response.status == 'valid') {
          this.shopDetail = response.data;
        } else if (response.status == 'invalid_form') {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        } else {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 1000);

    }, this.shopId);
  }

}
