import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from '../services/util.service';
import { LoadingController, ToastController} from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { GlobalEventsService } from '../services/globalevents.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  phone:any;
  user_id:any;
  otp1:any;
  otp2:any;
  otp3:any;
  otp4:any;
  userCode:any;
  constructor(private router: Router, private actRoute: ActivatedRoute,private loadingController: LoadingController,  private util: UtilService, private api: ApiService, private globalEvents: GlobalEventsService) { }

  ngOnInit() {
  this.user_id = this.actRoute.snapshot.paramMap.get('user_id');
  this.phone = this.actRoute.snapshot.paramMap.get('phone');
  }

gotonext(nextElement) {
    nextElement.setFocus();
  }

  onOtpChange(event) {
    
    this.userCode = event;
  }


  gotoHome()
  {
          let otp = this.userCode;
          let otpObj = {action:"otp_verification",otp:otp,user_id:this.user_id}
          this.util.showLoader();
          this.api.otpVerification((response: any) => {
              this.util.hideLoader();
              if(response.status==true)
              { 
                /*let publishData = {
                    'loggedIn': true,
                    'name': response.name,
                    'mobile': response.phone,
                    'userId': response.user_id
                  };
                  this.globalEvents.publishEventData(publishData); */

                //let user_id = response.user_id;
                //localStorage.setItem('user_id', user_id);
                this.router.navigate(['/confirmregister']);

                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
              else
              {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }            
          }, otpObj);  	 
  }


  resendOTP()
  {
      let resendotpObj = {action:"resend_otp",user_id:this.user_id}
          this.util.showLoader();
          this.api.resendOTP((response: any) => {
              this.util.hideLoader();
              if(response.status==true)
              { 
                this.util.presentToast("OTP Resent Successfully", 'danger', 'bottom', 2500);
              }
              else
              {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }            
          }, resendotpObj);
  }
}
