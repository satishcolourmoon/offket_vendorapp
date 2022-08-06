import { Component, OnInit,ViewChild  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';
import { GlobalEventsService } from '../services/globalevents.service';
@Component({
  selector: 'app-requestpayment',
  templateUrl: './requestpayment.page.html',
  styleUrls: ['./requestpayment.page.scss'],
})
export class RequestpaymentPage implements OnInit {
	vendor_id:any;
	requested_amount:any;
	total_payment:any;
  request_list:any;
  pack_type:any;
  shopId:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService,private Settings: GlobalEventsService) 
    { 
    	this.vendor_id=localStorage.getItem('fash_user_id');
  		
    }

  ionViewWillEnter()
  {
     this.getpackageReport();
     this.getRequestAmount();
     this.vendorRequests();
  }

doRefresh(event) {
          console.log('Refreshing Start');
          this.ngOnInit();
          this.ionViewWillEnter();
          setTimeout(() => {
            console.log('Refreshing Ended');
            event.target.complete();
          }, 2000);
        }

 async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "vendor_package",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
        if(response.status == true) 
        {
          this.pack_type = response.status;
        } 
        else 
        {
           this.router.navigate(['plans']);
        }

    }, catObj);
  }


   async getRequestAmount()
    {
		    let salesObj = { action: "getVendorDiscount", vendor_id: this.vendor_id };
		    let loading = await this.loadingCtrl.create({
		                    spinner:'circles',
		                    message: 'Please wait',
		                  });
		                  loading.present();

		    this.api.fetchRequestAmount((response: any) => {
		    loading.dismiss();
		          this.total_payment = response.total_payment;
		          this.requested_amount = response.requested_amount;
		    }, salesObj);
    }

    async vendorRequests()
    {
        let salesObj = { action: "getVendorRequests", vendor_id: this.vendor_id };
        let loading = await this.loadingCtrl.create({
                        spinner:'circles',
                        message: 'Please wait',
                      });
                      loading.present();

        this.api.fetchVendorRequests((response: any) => {
        loading.dismiss();
              this.request_list = response.request_list;
        }, salesObj);
    }

  requestPay(total_payment)
  {
      if(total_payment>0)
      {
        this.router.navigate(['addrequestpayment', {vendor_id: this.vendor_id,total_payment:total_payment}]);
      }
      else
      {
         this.util.presentToast("Please check Your Total Payments", 'danger', 'bottom', 2500);
      }
  		
  }

  async deleteRequest(id)
  {
      let salesObj = { action: "deleteRequest", id: id };
        let loading = await this.loadingCtrl.create({
                        spinner:'circles',
                        message: 'Please wait',
                      });
                      loading.present();

        this.api.clearRequest((response: any) => {
        loading.dismiss();
              if(response.status==true)
              {
                this.util.presentToast(response.message, 'success', 'bottom', 2500);
               this.vendorRequests();
              }
              else
              {
              this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
        }, salesObj);

  }

  ngOnInit() {
  this.listenToEvents();
  }

   listenToEvents() {
    this.Settings.getObservable().subscribe((data) => {
      if (data['request_list']) {
       
        this.request_list = data['request_list'];

      } else {
        // nothing           
      }
    });
    }

}
