import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { LoadingController, ToastController, ModalController, Platform,MenuController } from '@ionic/angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public loadingSpinner: any;
  public regForm: FormGroup;
  isSubmitted:any;
tokenId:any;
  constructor(private router: Router, private loadingController: LoadingController,
    private fb: FormBuilder, private util: UtilService, private api: ApiService, public modalController: ModalController, private menu : MenuController,private loadingCtrl: LoadingController) {
    this.tokenId = localStorage.getItem('token');
        this.regForm = this.fb.group({
       action: "vendor_registration",
      name: ['', [Validators.required,]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gst: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      cpassword: ['', [Validators.required,]],
      rcode: [''],
    });
     }

   ngOnInit() {
    
     $('#textName').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) 
        {
            return true;
        }
        else
        {
          e.preventDefault();
          this.this.regForm.value.firstname="";
          alert('Please Enter Alphabate');
          return false;
        }
    });

  }

  goLogin()
  {
  	this.router.navigate(['login']);
  }
  
  get errorControl() {
    return this.regForm.controls;
  }


  async goOTP() 
  {
  let loginObj = this.regForm.value;
    this.isSubmitted = true;

    if (!this.regForm.valid) 
    {
      //alert('Please provide all the required values!')
      return false;
    } 
    else if (this.regForm.value.mobile.toString().length !== 10) {
        this.util.presentToast('Enter a valid mobile number', 'danger', 'bottom', 2500);
        return false;
    }
    else if (this.regForm.value.password.length < 6) {
        this.util.presentToast('Password should be minimum of 6 digits', 'danger', 'bottom', 2500);
        return false;
    }
    else if (this.regForm.value.password !== this.regForm.value.cpassword) {
        this.util.presentToast('Your passwords do not match', 'danger', 'bottom', 2500);
        return false;
    }
    else 
    {
        let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

          this.api.dosignup((response: any) => {
              loading.dismiss();
              if(response.status==true)
              {
                this.router.navigate(['otp',{user_id:response.user_id,phone:this.regForm.value.mobile}]);
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
              else
              {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }             
          }, loginObj,this.tokenId);
    }
    
  }

}
