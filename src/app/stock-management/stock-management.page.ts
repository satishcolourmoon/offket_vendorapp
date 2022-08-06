import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

declare var $: any;
@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.page.html',
  styleUrls: ['./stock-management.page.scss'],
})
export class StockManagementPage implements OnInit {
  link_variant_id: any;
  pid: any;
  quantity: any;
  link_variants: any;
  stockmanagement:any;
  stockstatus:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, public modalController: ModalController, navParams: NavParams, private loadingCtrl: LoadingController) {
    this.link_variant_id = navParams.get('link_variant_id');
    this.pid = navParams.get('pid');
  }

  ngOnInit() {
    this.getStock()
  }

  async getStock() {

    let stockObj = { action: "stockManagement",variant_id: this.link_variant_id,pid: this.pid };
    this.stockmanagement = [];
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.fetchStockManagement((response: any) => {
    loading.dismiss();
        if (response.status == true) {
          this.stockmanagement = response.stock;
        }
        else {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }


    }, stockObj);
  }



  async updatePrice() {
    this.quantity = $("#quantity").val();
    this.stockstatus=$("#stockstatus").val();

    if(this.stockstatus==undefined || this.stockstatus=="")
    {
        this.util.presentToast("Select Stock Status", 'danger', 'top', 2500);
    }
    else if(parseInt(this.quantity)==0)
    {
        this.util.presentToast("Please enter minimum quantity", 'danger', 'top', 2500);
    }
    else if(this.quantity==undefined || this.quantity=="")
    {
        this.util.presentToast("Enter Quantity", 'danger', 'top', 2500);
    }
    else
    {
          let stockObj = { action: "addStock", product_id: this.pid, variant_id: this.link_variant_id, quantity: this.quantity,stockstatus:this.stockstatus };
              let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
          this.api.updateStock((response: any) => {
            loading.dismiss();
              if (response.status == true) {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);

                let linkvariantsObj = { action: "getlink_variants", pid: this.pid };
                this.link_variants = [];
                this.api.fetchLinkVariants((response: any) => {
                  this.link_variants = response.link_variants;
                  this.modalController.dismiss(this.link_variants);
                }, linkvariantsObj);
              }
              else {
                this.util.presentToast(response.message, 'danger', 'bottom', 2500);
              }
          }, stockObj);
    }
  }

  dismiss() {
    let linkvariantsObj = { action: "getlink_variants", pid: this.pid };
    this.link_variants = [];
    this.api.fetchLinkVariants((response: any) => {
      this.link_variants = response.link_variants;
      this.modalController.dismiss(this.link_variants);
    }, linkvariantsObj);
  }

}
