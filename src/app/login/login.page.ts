import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { LoadingController, ToastController, ModalController, Platform,MenuController } from '@ionic/angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { GlobalEventsService } from '../services/globalevents.service';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loadingSpinner: any;
  public loginForm: FormGroup;
  isSubmitted:any;
  user_type:any;
  user_name:any;
  password:any;
  token:any;
  tokenId:any;

  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';
 
  constructor(private router: Router, private loadingController: LoadingController, private globalEvents: GlobalEventsService,
    private fb: FormBuilder, private util: UtilService, private api: ApiService, public modalController: ModalController, private menu : MenuController) { 
    this.tokenId = localStorage.getItem('token');
  //alert(JSON.stringify(this.tokenId));
    this.user_type="vendor";
   
    }

     ionViewDidEnter() {
      // the root left menu should be disabled on this page
      this.menu.enable(false);
       this.user_name="";
       this.password="";
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
       action: "login",
      user_name: ['', [Validators.required,]],
      password: ['', [Validators.required,]],
      user_type: ['vendor', [Validators.required,]],
    });

  }


   hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

  signin() {
    this.showLoader();
    setTimeout(() => {
      this.hideLoader();
      this.router.navigate(['home']);
    }, 1000);
  }

  async showLoader() {
    this.loadingSpinner = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await this.loadingSpinner.present();
  }

  hideLoader() {
    if (this.loadingSpinner) {
      this.loadingSpinner.dismiss();
    }
    return;
  }



   get errorControl() {
    return this.loginForm.controls;
  }


  login() {
    let loginObj = this.loginForm.value;



    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      //alert('Please provide all the required values!')
      return false;
    } else {
      

    this.util.showLoader();
    this.api.doLoginUser((response: any) => {

        this.util.hideLoader();

      if(response.status == true) 
      {
          let user_id = response.user_id;
          localStorage.setItem('fash_user_id', user_id);
          localStorage.setItem('fash_user_type', loginObj.user_type);
          localStorage.setItem('mobile', response.phone);
          localStorage.setItem('image', response.image);
          let publishData = {
            'loggedIn': true,
            'user_type': loginObj.user_type,
            'name': response.name,
            'mobile': response.phone,
            'userId': response.user_id,
            'image': response.image
          };
          if(loginObj.user_type == 'vendor') 
          {
            publishData.name = response.shop_name;
            localStorage.setItem('name', response.shop_name);
          } 
          else 
          {
            localStorage.setItem('name', response.name);
          }
          this.globalEvents.publishEventData(publishData);
          if (loginObj.user_type == 'vendor') {
            this.router.navigate(['/vendor-dashboard', response.user_id], {
              state: {}
            });
          }

      } 
      else
      {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }

    }, loginObj,this.tokenId);

    }
  }




async goForgotPassword() {
    const modal = await this.modalController.create({
      component: ForgotpasswordPage,
      componentProps: { user_type: this.user_type}
    });
    modal.onDidDismiss()
      .then((data) => {
      });
    await modal.present();
  }


  goRegister()
  {
    this.router.navigate(['register']);
  }


}
