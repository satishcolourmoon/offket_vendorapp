import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-coupons',
  templateUrl: './create-coupons.page.html',
  styleUrls: ['./create-coupons.page.scss'],
})
export class CreateCouponsPage implements OnInit {
	coupon_code:any;
	percentage:any;
	maximum_amount:any;
	start_date:any;
	end_date:any;
	description:any;
	shopId:any;
  id:any;
  minimum_order_amount:any;
  utilization:any;
    date: String = new Date().toISOString();
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController) { }

  ngOnInit() {

  		this.id = this.actRoute.snapshot.paramMap.get('id');
  		this.coupon_code = this.actRoute.snapshot.paramMap.get('coupon_code');
  		this.percentage = this.actRoute.snapshot.paramMap.get('percentage');
  		this.maximum_amount = this.actRoute.snapshot.paramMap.get('maximum_amount');
  		this.start_date = this.actRoute.snapshot.paramMap.get('start_date');
  		this.end_date = this.actRoute.snapshot.paramMap.get('expiry_date');
  		this.description = this.actRoute.snapshot.paramMap.get('description');
      this.utilization= this.actRoute.snapshot.paramMap.get('utilization');
      this.minimum_order_amount= this.actRoute.snapshot.paramMap.get('minimum_order_amount');
  }

  async addCoupon()
  {
  		this.shopId = localStorage.getItem('fash_user_id');
  		if(this.coupon_code=='' || this.coupon_code==undefined)
  		{
  			this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
  		}
  		else if(this.percentage=='' || this.percentage==undefined)
  		{
  			this.util.presentToast("Enter Percentage", 'danger', 'top', 2500);
  		}
  		else if(this.maximum_amount=='' || this.maximum_amount==undefined)
  		{
  			this.util.presentToast("Enter Maximum amount", 'danger', 'top', 2500);
  		}
  		else if(this.start_date=='' || this.start_date==undefined)
  		{
  			this.util.presentToast("Select Start Date", 'danger', 'top', 2500);
  		}
  		else if(this.end_date=='' || this.end_date==undefined)
  		{
  			this.util.presentToast("Select End Date", 'danger', 'top', 2500);
  		}
  		else if(this.description=='' || this.description==undefined)
  		{
  			this.util.presentToast("Enter Description", 'danger', 'top', 2500);
  		}
      else if(this.utilization=='' || this.utilization==undefined)
      {
        this.util.presentToast("Enter Utilization Count", 'danger', 'top', 2500);
      }
      else if(this.minimum_order_amount=='' || this.minimum_order_amount==undefined)
      {
        this.util.presentToast("Enter Minimum Order Amount", 'danger', 'top', 2500);
      }
  		else
  		{
		    let catObj = { action: "addcouponcodes", vendor_id: this.shopId,coupon_code:this.coupon_code,percentage:this.percentage,maximum_amount:this.maximum_amount,start_date:this.start_date,end_date:this.end_date,description:this.description,minimum_order_amount:this.minimum_order_amount,utilization:this.utilization }
		    let loading = await this.loadingCtrl.create({
		                    spinner:'circles',
		                    message: 'Please wait',
		                  });
		                  loading.present();
		    this.api.addCouponCodes((response: any) => {
		      loading.dismiss();
		        if (response.status == true) {
		        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
		          this.router.navigate(['coupons']);
		        } else {

		          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
		        }

		    }, catObj);
     }
  }

  async updateCoupon()
  {
  		this.shopId = localStorage.getItem('fash_user_id');
  		if(this.coupon_code=='' || this.coupon_code==undefined)
  		{
  			this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
  		}
  		else if(this.percentage=='' || this.percentage==undefined)
  		{
  			this.util.presentToast("Enter Percentage", 'danger', 'top', 2500);
  		}
  		else if(this.maximum_amount=='' || this.maximum_amount==undefined)
  		{
  			this.util.presentToast("Enter Maximum amount", 'danger', 'top', 2500);
  		}
  		else if(this.start_date=='' || this.start_date==undefined)
  		{
  			this.util.presentToast("Select Start Date", 'danger', 'top', 2500);
  		}
  		else if(this.end_date=='' || this.end_date==undefined)
  		{
  			this.util.presentToast("Select End Date", 'danger', 'top', 2500);
  		}
  		else if(this.description=='' || this.description==undefined)
  		{
  			this.util.presentToast("Enter Description", 'danger', 'top', 2500);
  		}
      else if(this.utilization=='' || this.utilization==undefined)
      {
        this.util.presentToast("Enter Utilization Count", 'danger', 'top', 2500);
      }
      else if(this.minimum_order_amount=='' || this.minimum_order_amount==undefined)
      {
        this.util.presentToast("Enter Minimum Order Amount", 'danger', 'top', 2500);
      }
  		else
  		{
		    let catObj = { action: "updatecouponcodes", vendor_id: this.shopId,coupon_code:this.coupon_code,percentage:this.percentage,maximum_amount:this.maximum_amount,start_date:this.start_date,end_date:this.end_date,description:this.description,id:this.id,minimum_order_amount:this.minimum_order_amount,utilization:this.utilization }
		    let loading = await this.loadingCtrl.create({
		                    spinner:'circles',
		                    message: 'Please wait',
		                  });
		                  loading.present();
		    this.api.updateCouponCodes((response: any) => {
		      loading.dismiss();
		        if (response.status == true) {
		        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
		          this.router.navigate(['coupons']);
		        } else {

		          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
		        }

		    }, catObj);
     }
  }

}
