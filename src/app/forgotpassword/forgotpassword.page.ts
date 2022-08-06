import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { GlobalEventsService } from '../services/globalevents.service';
declare var $: any;
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
	user_type:any;
	show_logintype:any;
	phone:any;
	otpscreen:any;
	mobilescreen:any;
	otp:any;
	new_password:any;
	confirm_password:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,public modalController: ModalController,navParams: NavParams, private globalEvents: GlobalEventsService) 
    { 
    			this.user_type = navParams.get('user_type');
			  	if(this.user_type=='visual_merchant')
			  	{
			  		this.show_logintype="Visual Merchant";
			  	}
			  	else
			  	{
			  		this.show_logintype="Vendor";
			  	}


			  	
    }

  ngOnInit() {
  this.otpscreen = 'false';
  this.mobilescreen = 'true';
  //alert(his.otpscreen); alert(his.mobilescreen);
  }


  


   sendOTP()
  {
  	this.otp = $("#otp").val();
  	this.new_password = $("#new_password").val();
  	this.confirm_password = $("#confirm_password").val();
  	if(this.otp==undefined || this.otp=='')
  	{
  		this.util.presentToast("Enter OTP", 'danger', 'bottom', 2500);
  	}
  	else if(this.new_password==undefined || this.new_password=='')
  	{
  		this.util.presentToast("Enter New Password", 'danger', 'bottom', 2500);
  	}
  	else if(this.confirm_password==undefined || this.confirm_password=='')
  	{
  		this.util.presentToast("Enter Confirm Password", 'danger', 'bottom', 2500);
  	}
  	else if(this.new_password!=this.confirm_password)
  	{
  		this.util.presentToast("Password Mismatched", 'danger', 'bottom', 2500);
  	}
  	else
  	{
  			let resetObj = { action:"resetPassword", otp:this.otp, user_type:this.user_type, password:this.new_password,phone:this.phone};
                this.util.showLoader();
                this.api.checkresetPassword((response: any) => {
                    this.util.hideLoader();
                    if (response.status == true) 
                    {
                      	

                      			let user_id = response.user_id;
						          localStorage.setItem('fash_user_id', user_id);
						          localStorage.setItem('fash_user_type', this.user_type);
						          localStorage.setItem('mobile', response.phone);

						          let publishData = {
						            'loggedIn': true,
						            'user_type': this.user_type,
						            'name': response.name,
						            'mobile': response.phone,
						            'userId': response.user_id,
                        'image': response.image
						          };
						          if(this.user_type == 'vendor') 
						          {
						            publishData.name = response.shop_name;
						            localStorage.setItem('name', response.shop_name);
						          } 
						          else 
						          {
						            localStorage.setItem('name', response.name);
						          }
						          this.globalEvents.publishEventData(publishData);
						          if (this.user_type == 'vendor') {
						            this.router.navigate(['/vendor-dashboard', response.user_id], {
						              state: {}
						            });
						          } else if (this.user_type == 'visual_merchant') {
						            this.router.navigate(['/vm-dashboard', response.user_id], {
						              state: {}
						            });
						          }

						          this.modalController.dismiss();
                    } 
                    else 
                    {
                      this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, resetObj);
  	}
  }


  checkOTP()
  {
  	this.phone = $("#phone").val();
  	

  	if(this.phone==undefined || this.phone=='')
  	{
  		this.util.presentToast("Enter Phone Number", 'danger', 'bottom', 2500);
  	}
  	else
  	{
  			let forgotObj = { action:"forgotpassword", phone:this.phone, user_type:this.user_type };
                this.util.showLoader();
                this.api.forgotPassword((response: any) => {
                    this.util.hideLoader();
                    if (response.status == true) 
                    {
                      this.otpscreen='true';
                      this.mobilescreen='false';
                      this.util.presentToast("Please enter OTP", 'danger', 'bottom', 2500);
                    } 
                    else 
                    {
                      this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, forgotObj);
  	}
  }

  back()
  {
  		this.otpscreen='false';
        this.mobilescreen='true';
  }

  dismiss() {
			this.modalController.dismiss();
  }


}
