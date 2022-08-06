import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clone-subcategories',
  templateUrl: './clone-subcategories.page.html',
  styleUrls: ['./clone-subcategories.page.scss'],
})
export class CloneSubcategoriesPage implements OnInit {

 	 public sub_categories = [];
 	  shopId: any;
 	  catId:any;
 	  nval:any;
    catName:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    
  }
 ionViewWillEnter()
  {
     this.catName= this.actRoute.snapshot.paramMap.get('catName');
  	 this.catId= this.actRoute.snapshot.paramMap.get('catId');
     this.shopId = localStorage.getItem('fash_user_id');
     this.getshopSubCategories();
  }

  async getshopSubCategories() {

    let subcatObj = { action: "getShopsubcategoriesWithCategory", shopId: this.shopId,catId:this.catId };
    
			    let loading = await this.loadingCtrl.create({
			                    spinner:'circles',
			                    message: 'Please wait',
			                  });
                  loading.present();

    this.api.getShopSubCategorieswithCat((response: any) => {
    	loading.dismiss();
        if (response.status == true) {
        this.nval=true;
          this.sub_categories = response.subcategory_list;
        }
        else 
        {
        this.nval=false;
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }


    }, subcatObj);
  }


 gotoProductPage(catId,subcatid,title)
{
			this.router.navigate(['existingproduct',{catId:catId,subcatId:subcatid,catName:title}]);
}


}
