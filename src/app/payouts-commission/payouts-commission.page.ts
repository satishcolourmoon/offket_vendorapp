import { Component, OnInit,ViewChild  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-payouts-commission',
  templateUrl: './payouts-commission.page.html',
  styleUrls: ['./payouts-commission.page.scss'],
})
export class PayoutsCommissionPage implements OnInit {
  payouts:any;
  pending_settle:any;
  completed_settle:any;
  settlements:any;
  no_pending_settle:any;
  vendor_id:any;
  comsettlements:any;
  no_completed_settle:any;
    shopId:any;
  pack_type:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService) 
  {   
    this.payouts="pending_commission";
    this.pending_settle = true;
    this.completed_settle = false;
    this.no_pending_settle=false;
    this.no_completed_settle=false;
  }

  ngOnInit() {
   
    this.vendor_id = localStorage.getItem('fash_user_id');
    
  }
  

   ionViewWillEnter()
  {
   this.getpackageReport();
  this.getPendingsettlemts();
   this.getPendingsettlemts();
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

  async getPendingsettlemts()
  {
    let settlementObj = { action:"pending_settlements",vendor_id:this.vendor_id}
              let loading = await this.loadingCtrl.create({
                spinner:'circles',
                message: 'Please wait',
              });
              loading.present();
      this.api.fetchPendingsettlelist((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {
            this.no_pending_settle='false';
            this.settlements = response.settlements;
            if(this.settlements.length>0)
            {
                this.no_pending_settle='true';
            }
            //alert(JSON.stringify(this.settlements));
          }
          else 
          {
              this.no_pending_settle='true';
          }
      }, settlementObj); 
  }

  async getCompletedsettlemts()
  {
    let com_settlementObj = { action:"completed_Settlements",vendor_id:this.vendor_id}
              let loading = await this.loadingCtrl.create({
                spinner:'circles',
                message: 'Please wait',
              });
              loading.present();
      this.api.fetchCompletedsettlelist((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {
            this.no_completed_settle=false;
            this.comsettlements = response.settlements;
            //alert(JSON.stringify(this.settlements));
          }
          else 
          {
            this.no_completed_settle=true;
          }
      }, com_settlementObj); 
  }

  showOrder(type)
  {
      if(type=="pending_commission")
      {
        this.pending_settle = true;
        this.completed_settle = false;
      }
      else if(type=="settled_commission")
      {
        this.completed_settle = true;
        this.pending_settle = false;
        this.getCompletedsettlemts();
      }
  }

}
