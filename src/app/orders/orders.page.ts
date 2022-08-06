import { Component, OnInit,ViewChild  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';
import { SelectdeliveryBoyPage } from '../selectdelivery-boy/selectdelivery-boy.page';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  currentSegment = 'pending';
  orders:any;
  new_order:any;
  processing_order:any;
  transmit_order:any;
  completedorder:any;
  process_orders:any;
  vendor_id:any;
  selectOrder:any;
  transmit_orders:any;
  completed_orders:any;
  no_neworders:any;
  no_processingorders:any;
  no_transitorders:any;
  no_completeorders:any;
  no_neworders1:any;
  no_processingorders1:any;
  no_transitorders1:any;
  no_completeorders1:any;
   pack_type:any;
   shopId:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService, public modalController: ModalController) { 
          this.no_neworders=false;
          this.no_processingorders=false;
          this.no_transitorders=false;
          this.no_completeorders=false;
    }

  ngOnInit() 
  {
    this.selectOrder='pending';
    this.new_order=true;
    this.processing_order=false;
    this.transmit_order=false;
    this.completedorder=false;
    let uType = localStorage.getItem('fash_user_type');
    if(uType=='vendor')
    {
        this.vendor_id = localStorage.getItem('fash_user_id');
    }
    else
    {
        this.vendor_id = this.actRoute.snapshot.paramMap.get('shopId');
    }
    
    
  }


  doRefresh(event) {
          console.log('Refreshing Start');
          this.ngOnInit();
          
          setTimeout(() => {
            console.log('Refreshing Ended');
            event.target.complete();
          }, 2000);
        }



    ionViewDidEnter() {
      // the root left menu should be disabled on this page
      this.getpackageReport();

      this.getOrderslist();
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

  async getOrderslist()
  {
    let orderObj = { action:"getOrdersList",vendor_id:this.vendor_id}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.fetchOrderslist((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {
            this.no_neworders1=true;
            this.orders = response.orders;
            if(this.orders.length==0)
            {
            this.no_neworders1=false;
            }
          }
          else 
          {
              this.no_neworders1=false;
              
          }
      }, orderObj); 
  }


  async getProceOrdersList()
  {
    let orderObj = { action:"getProcessingOrdersList",vendor_id:this.vendor_id}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.fetchOrderslist((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {

            this.process_orders = response.orders;
             this.no_processingorders1=true;
          }
          else 
          {
            this.no_processingorders=true;
            this.no_processingorders1=false;
          }
      }, orderObj); 
  }

  async getTransmitOrdersList()
  {
    let orderObj = { action:"getTransmitOrdersList",vendor_id:this.vendor_id}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.fetchOrderslist((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {

            this.transmit_orders = response.orders;
            this.no_transitorders1=true;
          }
          else 
          {
              this.no_transitorders=true;
              this.no_transitorders1=false;
          }
      }, orderObj); 
  }

  async getCompletedOrdersList()
  {
    let orderObj = { action:"getCompletedOrdersList",vendor_id:this.vendor_id}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.fetchOrderslist((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {

            this.completed_orders = response.orders;
            this.no_completeorders1=true;
          }
          else 
          {
            this.no_completeorders=true;
            this.no_completeorders1=false;
          }
      }, orderObj); 
  }

  segmentChanged(event){
    this.currentSegment = event.target.value;
  }

  showOrder(chk)
  {
    if(chk=='neworder')
    {
        this.new_order=true;
        this.processing_order=false;
        this.transmit_order=false;
        this.completedorder=false;
        this.getOrderslist();
        
    }
    else if(chk=='processing')
    {
        this.new_order=false;
        this.processing_order=true;
        this.transmit_order=false;
        this.completedorder=false;
        this.getProceOrdersList();
    }
    else if(chk=='intransit')
    {
        this.new_order=false;
        this.processing_order=false;
        this.transmit_order=true;
        this.completedorder=false;
        this.getTransmitOrdersList();
    }
    else if(chk=='completed')
    {
         this.new_order=false;
        this.processing_order=false;
        this.transmit_order=false;
        this.completedorder=true;
        this.getCompletedOrdersList();
    }
  }

  goOrderDetails(oid)
  {
      this.router.navigate(['orderdetails', { oid: oid }]);
  }

  async aceptOrder(orderid)
  {
      let aObj = { action:"acceptOrder",vendor_id:this.vendor_id,orderid:orderid}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.doacceptOrder((response: any) => {
        loading.dismiss();

          if (response.status == true) 
          {

            this.util.presentToast(response.message, 'danger', 'bottom', 2500);
           
                    this.getOrderslist();
            this.getProceOrdersList();
            this.new_order=false;
            this.processing_order=true;
            this.transmit_order=false;
            this.completedorder=false;
             
            this.selectOrder='processing';
          }
          else 
          {
            this.util.presentToast(response.message, 'danger', 'bottom', 2500);
          }
      }, aObj); 
  }

async pickupOrder(orderid)
  {

      let aObj = { action:"confirm_pickup",vendor_id:this.vendor_id,orderid:orderid}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.confirmPickup((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {
            
            
            this.new_order=false;
            this.processing_order=false;
            this.transmit_order=true;
            this.completedorder=false;
            this.getTransmitOrdersList();
            this.selectOrder='intransit';
            this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            
          }
          else 
          {
            this.util.presentToast(response.message, 'danger', 'bottom', 2500);
          }
      }, aObj); 
  }


  async confirmdelivery(orderid)
  {
  const modal = await this.modalController.create({
          component: SelectdeliveryBoyPage,
          componentProps: {vendor_id:this.vendor_id,orderid:orderid}
        });
        modal.onDidDismiss()
          .then((data) => {
            this.ngOnInit();
          });
    await modal.present();
  }


  async cancelOrder(orderid)
  {
      let caObj = { action:"cancelOrder",vendor_id:this.vendor_id,orderid:orderid}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.docancelOrder((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {
            this.util.presentToast(response.message, 'danger', 'bottom', 2500);
            this.getOrderslist();
          }
          else 
          {
            this.util.presentToast(response.message, 'danger', 'bottom', 2500);
          }
      }, caObj); 
  }
}
