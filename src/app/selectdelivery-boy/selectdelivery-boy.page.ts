import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

declare var $: any;
@Component({
  selector: 'app-selectdelivery-boy',
  templateUrl: './selectdelivery-boy.page.html',
  styleUrls: ['./selectdelivery-boy.page.scss'],
})
export class SelectdeliveryBoyPage implements OnInit {

vendor_id:any;
orderid:any;
delivery_type:any;
otp:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,public modalController: ModalController,navParams: NavParams,private loadingCtrl: LoadingController) 
    { 
        this.vendor_id = navParams.get('vendor_id');
        this.orderid = navParams.get('orderid');
     }

  ngOnInit() 
  {
      let otpObj = {action:"generateOTP",vendor_id:this.vendor_id,orderid:this.orderid};
     this.api.generateUserOTP((response: any) => {
                 
                    
                }, otpObj);
  }

  async verifyOTP()
  {
  	this.otp = $("#otp").val();

  	if(this.otp==undefined || this.otp=='')
  	{
  		this.util.presentToast("Enter OTP", 'danger', 'top', 2500);
  	}
  	else
  	{
  			let assignDelivery = {action:"confirm_delivery",otp:this.otp,vendor_id:this.vendor_id,orderid:this.orderid};
                let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

                this.api.confirmDelivery((response: any) => {
                   loading.dismiss();
                    if (response.status == true) 
                    {
                    this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    
                       this.modalController.dismiss();
                    } 
                    else 
                    {
                      this.util.presentToast(response.message, 'danger', 'top', 2500);
                    }
                }, assignDelivery);
  	}
  }

  dismiss() {
  this.modalController.dismiss();
  }

}
