import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.page.html',
  styleUrls: ['./bid-list.page.scss'],
})
export class BidListPage implements OnInit {
  bidRequest:any;
  shopId:any;
  bidslist:any;
  nval:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController) 
    { 
        
    }

  ngOnInit() {
  this.bidRequest = "openBid";
    this.getBids(this.bidRequest);
  }

  goBid(status)
  {
     this.bidRequest=status;
     this.getBids(this.bidRequest);
  }

  async getBids(bidRequest) 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "requestbidslist", vendor_id: this.shopId,bid_status:bidRequest }
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchBidslist((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.bidslist = response.bidslist;
          this.nval=true;
        } else {
        this.nval=false;
        this.bidslist = [];
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, catObj);
  }

  bidProductList(id){
    this.router.navigate(['bid-product',{bid:id}]);
  }
}
