import { Component, OnInit,ViewChild  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from '../services/api.service';

import { IonContent } from '@ionic/angular';
//import { GlobaleventsService } from 'src/app/services/globalevents.service';
import { GlobalEventsService } from '../services/globalevents.service';
@Component({
  selector: 'app-addrequestpayment',
  templateUrl: './addrequestpayment.page.html',
  styleUrls: ['./addrequestpayment.page.scss'],
})
export class AddrequestpaymentPage implements OnInit {
	total_payment:any;
	vendor_id:any;
	requested_amount:any;
	reason:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService, private globalEvents: GlobalEventsService) 
    { 
		this.vendor_id=this.actRoute.snapshot.paramMap.get('vendor_id');
    	this.total_payment=this.actRoute.snapshot.paramMap.get('total_payment');
    }

    async requestPayment()
    {
    	if(this.requested_amount=='' || this.requested_amount==undefined)
    	{
    		this.util.presentToast("Enter Rquested Amount", 'danger', 'bottom', 2500);
    	}
    	else if(this.reason=='' || this.reason==undefined)
    	{
    		this.util.presentToast("Enter Description", 'danger', 'bottom', 2500);
    	}
    	else
    	{
	    			let reqObj = { action: "requestvendorPayments", vendor_id: this.vendor_id , requested_amount: this.requested_amount , description: this.reason,total_payment:this.total_payment };
					    let loading = await this.loadingCtrl.create({
					                    spinner:'circles',
					                    message: 'Please wait',
					                  });
					                  loading.present();

					    this.api.doVendorPayments((response: any) => {
					    loading.dismiss();

                      if(response.status==true)
                      {
                        this.util.presentToast("Request sent Successfully", 'danger', 'bottom', 2500);

                                    let salesObj = { action: "getVendorRequests", vendor_id: this.vendor_id };
                                    this.api.fetchVendorRequests((response: any) => {
                                          //this.request_list = response.request_list;
                                           this.globalEvents.publishEventData({
                                                          request_list: response.request_list
                                                  });
                                    }, salesObj);

                        this.router.navigate(['requestpayment']);
                      }
                      else
                      {
                          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      }
					          	
					    }, reqObj);
    	}
    	
    }

  ngOnInit() {
  }

}
