import { Component, OnInit,ViewChild  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
	vendor_id:any;
	orders:any;
	no_neworders:any;
  pack_type:any;
  shopId:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService, public alertController: AlertController) 
    {

    }

  ngOnInit() {
  this.vendor_id = localStorage.getItem('fash_user_id');
  	
  }


  ionViewWillEnter()
  {
     this.getpackageReport();
     this.getOrdersExchangelist();
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

  async getOrdersExchangelist()
  {
    let exorderObj = { action:"getexchange_orders",vendor_id:this.vendor_id};
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.fetchexchange_orders((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {

            this.orders = response.orders;
            if(this.orders.length>0)
            {
               this.no_neworders=false;
            }

            this.no_neworders=true;
            
          }
          else 
          {
              this.no_neworders=false;
          }
      }, exorderObj); 
  }

  async aceptOrder(oid,session_id,delivery_type)
  {
     const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to refund this product ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {

                  let acceptObj = { action:"acceptExchange_orders",oid:oid,vendor_id:this.vendor_id,session_id:session_id};
                        
                this.api.acceptExchangeorders((response: any) => {
               
                    if (response.status == true) 
                    {
                         this.util.presentToast(response.message, 'success', 'bottom', 2000);
                         this.router.navigate(['/vendor-dashboard/'+this.vendor_id]);
                         
                    }
                    else 
                    {
                        this.util.presentToast(response.message, 'danger', 'bottom', 2000);
                    }
                }, acceptObj);

          }
        }
      ]
    });

        await alert.present();   
    

  	 

  }

}
