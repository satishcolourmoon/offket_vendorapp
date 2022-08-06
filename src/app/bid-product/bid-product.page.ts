import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bid-product',
  templateUrl: './bid-product.page.html',
  styleUrls: ['./bid-product.page.scss'],
})
export class BidProductPage implements OnInit {
	bidslist:any;
	bid:any;
	shopId:any;
	cart_products:any;
	total_amount:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
  this.shopId = localStorage.getItem('fash_user_id');
  		this.bid = this.actRoute.snapshot.paramMap.get('bid');
  		this.getBids(this.bid);
  }

  async getBids(bid) 
  {
    let catObj = { action: "getBidDetails", bid: bid,vendor_id:this.shopId }
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchBidDetails((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.bidslist = response.bidslist;
          this.cart_products=response.bidslist.cart_products;
          
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, catObj);
  }

  async sendQuotation(grand_total,user_id)
  {
  	 if(this.total_amount=='' || this.total_amount==undefined)
  	 {
  	     this.util.presentToast("Enter Quotation", 'danger', 'middle', 2500);
  	 }
  	 else if(parseInt(this.total_amount)>=parseInt(grand_total))
  	 {
  	 	this.util.presentToast("Enter Minimum of Total amount", 'danger', 'middle', 2500);
  	 }
  	 else
  	 {
  	 		let catObj = { action: "submitBidQuote", bid_id:this.bid,vendor_id:this.shopId,total_price:this.total_amount,user_id:user_id }
		    let loading = await this.loadingCtrl.create({
		                    spinner:'circles',
		                    message: 'Please wait',
		                  });
		                  loading.present();
		    this.api.addQuote((response: any) => {
		      loading.dismiss();
		        if (response.status == true) {
		          	this.util.presentToast(response.message, 'danger', 'bottom', 2500);
		          	this.getBids(this.bid);
		        } else {
		          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
		        }
		    }, catObj);
  	 }
  }

}
