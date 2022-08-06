import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {
  public shops = [];
  constructor(private util: UtilService, private api: ApiService, private router: Router) {
    this.getshopLists();
  }

  ngOnInit() {
    // this.shops = [
    //       {'id':1, 'shop_name':'South India Shopping Mall', 'shop_logo':'assets/images/shops/southindia.png', 'shop_desc':''},
    //       {'id':2, 'shop_name':'CMR Shopping Mall', 'shop_logo':'assets/images/shops/cmr.png', 'shop_desc':''},
    //       {'id':3, 'shop_name':'Lucky Store', 'shop_logo':'assets/images/shops/lucky.png', 'shop_desc':''},
    //       {'id':4, 'shop_name':'KLM Fashion Mall', 'shop_logo':'assets/images/shops/klmfashion.png', 'shop_desc':''},
    //     ]
  }
  viewShop(shopId) {
    this.router.navigate(['/shopdetails', shopId]);
  }

  getshopLists() {
    this.util.showLoader();
    this.api.fetchShopLists((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
      }, 1000);
      if (response.status == 'valid') {
        this.shops = response.data;
      } else if (response.status == 'invalid_form') {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      } else {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, 1);
  }

}
