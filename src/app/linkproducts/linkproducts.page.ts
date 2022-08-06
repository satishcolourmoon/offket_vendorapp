import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform,LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { StockManagementPage } from '../stock-management/stock-management.page';
import { UpdatepricePage } from '../updateprice/updateprice.page';
@Component({
  selector: 'app-linkproducts',
  templateUrl: './linkproducts.page.html',
  styleUrls: ['./linkproducts.page.scss'],
})
export class LinkproductsPage implements OnInit {
  pid: any;
  link_variants: any;
  page:any;
  userId:any;
  product_status:any;
  saleprice1:any;
  price1:any;
  stock1:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, public modalController: ModalController,private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.pid = this.actRoute.snapshot.paramMap.get('pid');
    this.page = this.actRoute.snapshot.paramMap.get('page');
    this.userId = localStorage.getItem('fash_user_id');
    //this.getlink_variants(this.pid);
  }

 ionViewWillEnter()
 {
   this.getlink_variants(this.pid);
 }
  async getlink_variants(pid) 
  {
    let linkvariantsObj = { action: "getlink_variants", pid: pid };
    this.link_variants = [];

    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchLinkVariants((response: any) => {
        loading.dismiss();
        if (response.status == true) {
          this.link_variants = response.link_variants;
          this.product_status= response.product_status;
        }
        else {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, linkvariantsObj);
  }

  getlink_variants1(pid) {
    let linkvariantsObj = { action: "getlink_variants", pid: pid };
    this.link_variants = [];
    //this.util.showLoader();
    this.api.fetchLinkVariants1((response: any) => {
      //this.util.hideLoader();
      if (response.status == true) {
        this.link_variants = response.link_variants;
      }
      else {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, linkvariantsObj);
  }



  async updateStock(link_variant_id) {

    const modal = await this.modalController.create({
      component: StockManagementPage,
      componentProps: { link_variant_id: link_variant_id, pid: this.pid }
    });
    modal.onDidDismiss()
      .then((data) => {

        this.link_variants = data.data;
      });
    await modal.present();
  }


  async updatePrice(link_variant_id,price,saleprice,stock) {
  if(price=="0" || price==0)
  {
     this.price1="";
  }
  else 
  {
    this.price1=price;
  }

  if(saleprice=="0" || saleprice==0)
  {
    this.saleprice1="";
  }
  else
  {
    this.saleprice1=saleprice;
  }

  if(stock=="0" || stock==0)
  {
    this.stock1="";
  }
  else
  {
    this.stock1=stock;
  }

    const modal = await this.modalController.create({
      component: UpdatepricePage,
      componentProps: { link_variant_id:link_variant_id,pid:this.pid,price:this.price1,saleprice:this.saleprice1,stock:this.stock1 }
    });
    modal.onDidDismiss()
      .then((data) => {
        //this.getlink_variants1(this.pid);
        this.link_variants = data.data;
      });
    await modal.present();
  }

  changeStatus(status, vid) {
    let changeStatusObj = { action: "changeStatus", status: status, vid: vid };
    //this.util.showLoader();
    this.api.changeStatus((response: any) => {
      //this.util.hideLoader();
      if (response.status == true) {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        this.getlink_variants(this.pid);
      }
      else {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, changeStatusObj);

  }

  productImages(vid, product_id,clone_status) {
      if(clone_status=='true')
      {
          this.util.presentToast("You didn't change the clone product images", 'danger', 'bottom', 2500);
      }
      else
      {
        this.router.navigate(['productimages', { vid: vid, product_id: product_id }]);
      }
  }

}
