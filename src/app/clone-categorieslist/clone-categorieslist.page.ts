import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clone-categorieslist',
  templateUrl: './clone-categorieslist.page.html',
  styleUrls: ['./clone-categorieslist.page.scss'],
})
export class CloneCategorieslistPage implements OnInit {

  public categories = [];
  public shopId;
  data: any;
  nval:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    let uType = localStorage.getItem('fash_user_type')
    if(uType=='vendor')
    {
      this.shopId = localStorage.getItem('fash_user_id');
    }
    else
    {
      this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
    }
    
    this.getshopCategories();
  }

 async getshopCategories() {
    let catObj = { action: "getcategories", user_id: this.shopId }
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.fetchShopCategories((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.categories = response.category_list;
          this.nval=true;
        } else {
        this.nval=false;
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, catObj);
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }


gotoPage(cid,title,shopId)
{
  this.router.navigate(['clone-subcategories',{catId:cid,catName:title,shopId:shopId}]);
}


}