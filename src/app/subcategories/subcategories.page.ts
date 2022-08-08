import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.page.html',
  styleUrls: ['./subcategories.page.scss'],
})
export class SubcategoriesPage implements OnInit {

  sub_categories:any= [];
  shopId:any;
  catId:any;
  catName:any;
  nval:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController) {

     this.catId = this.actRoute.snapshot.paramMap.get('catId');
    this.catName = this.actRoute.snapshot.paramMap.get('catName');
    this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
  }

  ngOnInit() {
   
    this.getshopSubCategories();
  }


async getshopSubCategories() {
      this.shopId = localStorage.getItem('fash_user_id');

    let subcatObj = { action: "getsubcategories_shop", catId: this.catId,shopId:this.shopId };
   
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.getsubcategoriesShop((response: any) => {
    loading.dismiss();
        if (response.status == true) {
          this.sub_categories = response.subcategory_list;
          //alert(JSON.stringify(this.sub_categories));
        }
        else {
        this.nval=false;
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }


    }, subcatObj);
  }


 gotoProductPage(catId,subcatid,title,shopId)
{
			this.router.navigate(['products',{catId:catId,subcatId:subcatid,catName:title,shop_id:shopId}]);
}


}
