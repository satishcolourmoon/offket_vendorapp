import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { UtilService } from '../services/util.service';
import { ApiService } from '../services/api.service';
import { LoadingController, ToastController} from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
 @ViewChild('content', { static: false }) private content: any;
  data: any;
  tabSelected: any;

  variation: any;
  shopId: any;
  productList: any;
  catId: any;
  attributelist: any;
  attributevalues: any;
  size: any = [];
  attribute: any = [];

  selectedArray: any = [];
  selectedFilters: any = [];
  currentSegment;
  attributeValues = [];
  subcatId:any;
  brands:any;
  newArray=[];
  brandsjson_data:any;
  constructor(private router: Router, private actRoute: ActivatedRoute,public modalController: ModalController,private menu : MenuController,private loadingController: LoadingController,  private util: UtilService, private api: ApiService, navParams: NavParams) 
  { 
      this.shopId = navParams.get('shopId');

      this.catId = navParams.get('catId');
      this.subcatId = navParams.get('subcatId');
      this.brandsjson_data = navParams.get('brandsjson_data');
      //this.newArray.push(this.brandsjson_data);
  }

 ngOnInit() {
    this.currentSegment='brands';
    this.getproductBrands();
  }


  getproductBrands() {

   let brandObj = { action:"getfilterBrands",subcatid:this.subcatId,brandsjson_data:this.brandsjson_data}

    this.api.getfilterBrands((response: any) => {
     
        if (response.status == true) {
          this.brands = response.brands;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, brandObj);
  }

  
  dismiss() {
    this.modalController.dismiss();
  }


reset()
{
this.brandsjson_data='';
this.getproductBrands();
this.newArray=[];
}




  selectAttrVal(ev, data) {
  
    if(ev.target.checked){
      // Pushing the object into array
      this.newArray.push(data);

    }else {
      let removeIndex = this.newArray.findIndex(itm => itm===data);

      if(removeIndex !== -1)
        this.newArray.splice(removeIndex,1);
    }

  }



  apply() {
    this.modalController.dismiss({
      action: 'filterApply',
      json_data: this.newArray
    })
  }


  variationChange(val) {
    this.variation = val;
  }
}