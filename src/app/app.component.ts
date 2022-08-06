import { Component,Renderer2 } from '@angular/core';

import { Platform,AlertController,NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { GlobalEventsService } from './services/globalevents.service';
import { UtilService } from './services/util.service';
import { ApiService } from './services/api.service';
import { ModalController } from '@ionic/angular';
import { NointernetPagePage } from './nointernet-page/nointernet-page.page';
import { Network } from '@ionic-native/network/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  vendorMenu: any;
  isLoggedIn: boolean;
  userType: string;
  name: string;
  mobile: string;
  userTypeText: string;
  public userId;
vendor_id:any;
image:any;
tokenId:any;
currentversion:any;
  public pushPayload: any;
    public back_subscription;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private GlobalEvents: GlobalEventsService,
    private router: Router,
    private util: UtilService,private network: Network,private alertCtrl: AlertController,public modalController: ModalController,private oneSignal: OneSignal,private apiserv: ApiService,public navctrl: NavController,private appVersion: AppVersion,private Renderer2 :Renderer2) {
  this.vendor_id = localStorage.getItem('fash_user_id');
    this.sidemenu();
    this.initializeApp();
    this.backb();

    this.isLoggedIn = localStorage.getItem('fash_user_id') ? true : false;
    let uType = localStorage.getItem('fash_user_type');
    if (uType) {
      this.userId = localStorage.getItem('fash_user_id');
      this.userType = uType;
      if (this.userType == 'visual_merchant') {
        this.userTypeText = 'Visual Merchant';
      }
      if (this.userType == 'vendor') {
        this.userTypeText = 'Vendor';
      }
    }
    this.name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
    this.mobile = localStorage.getItem('mobile') ? localStorage.getItem('mobile') : '';
    this.image = localStorage.getItem('image');   


    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          this.presentContactModal();
        });
      
  }

async presentContactModal() 
  {
     const modal = await this.modalController.create({
      component: NointernetPagePage,
      componentProps: {}
    });
    modal.onDidDismiss().then((data) => {
    });
    await modal.present();
  }

 backb()
  {
    this.platform.ready().then(() => {
        this.back_subscription = this.platform.backButton.subscribe(() => {
        //alert(JSON.stringify(this.router.url));
          if (this.router.url == '/vendor-dashboard/'+this.userId) {
            this.exitApp_confirm();
            //return;
            //navigator['app'].exitApp();
          }
          else if (this.router.url == '/requestpayment' || this.router.url == 'requestpayment') {
            this.router.navigate(['/vendor-dashboard', this.userId], {
              state: {}
            });
          }
          else 
          {
            window.history.back();
          }
        });
      });
  } 


    async exitApp_confirm() {
    const exitApp_confirm_alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you really want to exit the app?',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            navigator['app'].exitApp();
          }
        }, {
          text: 'Cancel',
          handler: () => {
            this.alertCtrl.dismiss();
          }
        }
      ]
    });
    await exitApp_confirm_alert.present();
  }



  initializeApp() {

    this.platform.ready().then(() => {
    this.Renderer2.setAttribute(document.body,'color-scheme','light');
    this.prepareOnesignal();
    //this.statusBar.hide();
      this.statusBar.backgroundColorByHexString('#05274d');
      this.splashScreen.hide();
      this.listenEvents();
    });

    this.updateAppVersion();
  }

  updateAppVersion() {
    var appVersion = '0.0.3';
    let banObj = { action: "version_control" }
    this.apiserv.updateVersion((response: any) => {
      console.log(response);
      if (response['status'] == true) {
        this.currentversion = response['veersion_no'];
        if (appVersion == this.currentversion) 
        {
          // this.navctrl.navigateForward('/home');
        } else {
          this.navctrl.navigateForward('/updateversion');
        }
      }
    }, banObj);
  }

  sidemenu() {

    this.vendorMenu = [
      {
        title: "Home",
        url: "/vendor-dashboard/" + this.userId,
        icon: "home"
      },
      {
        title: "Subscription",
        url: "/plans",
        icon: "list-circle"
      },
      {
        title: "My Orders",
        url: "/orders",
        icon: "cart"
      },
      {
        title: "Coupon Codes",
        url: "/coupons",
        icon: "cart"
      },
      {
        title: "Add offer",
        url: "/offers",
        icon: "list-circle"
      },
     /* {
        title: "Banners",
        url: "/offer-banners",
        icon: "cart"
      }, */
      {
        title: "User Reviews",
        url: "/userreviews",
        icon: "globe"
      },
       {
        title: "Sales Report",
        url: "/sales",
        icon: "globe"
      }, 
      {
        title: "My Packages",
        url: "/mypackage",
        icon: "list-circle"
      },
      {
        title: "Share App",
        url: "/shareapp",
        icon: "globe"
      },
      {
        title: "Payout Commission",
        url: "/payouts-commission",
        icon: "cash"
      },
      {
        title: "Request Amount",
        url: "/requestpayment",
        icon: "cash"
      },
      {
        title: "Exchange Orders",
        url: "/exchange",
        icon: "list-circle"
      },
      {
        title: "Terms & Conditions",
        url: "/terms",
        icon: "list-circle"
      },
      {
        title: "Change Password",
        url: "/settings",
        icon: "settings"
      },
      {
         title: "Contact Us",
         url: "/contactus",
         icon: "list-circle"
      }

    ]
  }

  listenEvents() {
    this.GlobalEvents.getObservable().subscribe((data) => {
      if (data['loggedIn']) {
        this.isLoggedIn = data['loggedIn'];
      }
      if (data['user_type']) {
        this.userType = data['user_type'];
        if (this.userType == 'vendor') {
          this.userTypeText = 'Vendor';
        }
      }
      if (data['name']) {
        this.name = data['name'];
      }
      if (data['mobile']) {
        this.mobile = data['mobile'];
      }
      if (data['userId']) {
        this.userId = data['userId'];

      }
      if (data['image']) {
        this.image = data['image'];

      }
      
      this.sidemenu();
    })
  }



  private prepareOnesignal() {
    
    this.oneSignal.startInit('9099ede7-453b-4a72-b836-6cacea4a5bb1', '');    

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((notiData) => {
      this.pushPayload = notiData;
      const postData = notiData.payload.additionalData;
      //alert(JSON.stringify(this.router.url));
       this.router.navigate(['/orders']);
    });


    this.oneSignal.getIds().then((id) => {
    //alert(JSON.stringify(id.userId));
   // alert(JSON.stringify(id.pushToken));

      console.log('ONE SIGNAL user id: ' + id.userId);
      console.log('ONE SIGNAL PUSH TOKEN: ' + id.pushToken);
      localStorage.setItem('token', id.userId);
      this.tokenId = localStorage.getItem('token');

    });

    this.oneSignal.endInit();
  }



  logout() {

    localStorage.removeItem('fash_user_id');
    localStorage.removeItem('fash_user_type');
    localStorage.removeItem('name');
    localStorage.removeItem('mobile');
    localStorage.removeItem('image');
    this.isLoggedIn = false;
    this.userType = '';
    this.name = '';
    this.mobile = '';
    this.image = '';
    this.router.navigate(['/login'], {
      state: {}
    });
  }


}
