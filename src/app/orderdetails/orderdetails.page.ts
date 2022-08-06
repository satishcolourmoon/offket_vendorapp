import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {

  oid:any;
ordersdetails:any;
no_neworders:any;
  constructor(private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController, private api: ApiService) {

  }

  ngOnInit() {

  this.oid = this.actRoute.snapshot.paramMap.get('oid');
  //alert(this.oid);
  this.getOrderdetail();
  }

  async getOrderdetail()
  {
    let orderdetObj = { action:"getOrdersdetails",oid:this.oid}
                  let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
      this.api.fetchOrderdetails((response: any) => {
        loading.dismiss();
          if (response.status == true) 
          {

            this.ordersdetails = response.ordersdetails;
            //alert(JSON.stringify(this.orders));
          }
          else 
          {
              this.no_neworders=true;
          }
      }, orderdetObj); 
  }

}
