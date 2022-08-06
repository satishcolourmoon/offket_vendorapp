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
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
})
export class EditproductPage implements OnInit {
pid:any;
  

   public image1;
  public image2;
  public image3;
  public image4;
  public shopId;
 product_name:any;
 category:any;
 subcategory:any;
 product_description:any;
 key_fetures:any;
 product_startdate:any;
 product_tags:any;
 meta_tag_title:any;
 meta_tag_description:any;
 meta_tag_keywords:any;
 brand:any;
 tax:any;
 taxname:any;
 tags:any;
 cancel_available:any;
 return_available:any;
 manage_stock:any;
 variant_product:any;
 price:any;
 sale_price:any;
 stock:any;
 status:any;
 sub_categories:any;
 categories:any;
  @ViewChild('prodName') pName;
  @ViewChild('catName') cName;

  @ViewChild('subcatName') subc_Name;
  @ViewChild('pro_descName') pro_desc;
  @ViewChild('keyfeatName') key_feat;

  @ViewChild('proStartName') pro_sdate;
  @ViewChild('pro_tagName') pro_tag;
  @ViewChild('meta_titleName') meta_title;

  @ViewChild('meta_descName') meta_desc;
  @ViewChild('meta_keywordsName') meta_keywords;
   @ViewChild(IonContent, { static: false }) content: IonContent;

   taxlist:any;
   brands:any;
   variant:any;
   selectedtax:any;
   product_details:any;
   availabile_stock_status:any;
   no_of_days:any;
   exchangestatus:any;
product_status:any;
showstat:any;
offers:any;
price_range:any;
showdays:any;
end_price_range:any;
start_price_range:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService) {
    

    this.product_startdate = (new Date().getDay() - 1).toString() + '-' +(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
    this.taxname=false;
    this.variant=false;
  }

  ngOnInit() {
  	this.pid=this.actRoute.snapshot.paramMap.get('pid');

    this.shopId = this.actRoute.snapshot.paramMap.get('shop_id');
    this.getbasicSubCategoriesList();
    this.getshopCategories();
    
    this.getproductTags();
    
    this.getTaxList();
    this.getsingleProduct(this.pid);
    
  }

getDays()
{
  if(this.return_available=='yes')
  {
      this.showdays='true';
  }
  else
  {
      this.showdays='false';
  }
}

  getsingleProduct(pid)
  {
   let editProdObj = { action:"getSingleProduct",pid:pid}
    //this.util.showLoader();
    this.api.getProductData((response: any) => {
        //this.util.hideLoader();
        setTimeout(() => {
        if (response.status == true) {
          this.product_details = response.product_details;
          this.pid=response.product_details.id;
          this.product_name = response.product_details.name;
          this.category = response.product_details.cat_id;
          
          this.subcategory = response.product_details.sub_cat_id;
          this.getproductBrands(this.subcategory);
          this.product_description = response.product_details.description;
          this.key_fetures = response.product_details.key_features;
          this.product_startdate = response.product_details.selling_date;

          //this.product_tags = response.product_details.product_tags;
          		var str = response.product_details.product_tags;
				this.product_tags = str.split(",");
          this.meta_tag_title = response.product_details.meta_tag_title;

          this.meta_tag_description = response.product_details.meta_tag_description;
          this.meta_tag_keywords = response.product_details.meta_tag_keywords;
          this.brand = response.product_details.brand_id;
          this.no_of_days=response.product_details.no_of_days;
          //this.tax = response.product_details.tax_class;
          //this.selectedtax = response.product_details.taxname;
          this.cancel_available = response.product_details.cancel_status;

          this.return_available = response.product_details.return_status;
          this.exchangestatus= response.product_details.exchangestatus;
          this.manage_stock = response.product_details.manage_stock;
          this.price_range= response.product_details.price_range;
          this.start_price_range = response.product_details.start;
          this.end_price_range = response.product_details.end;
          

          this.variant_product = response.product_details.variant_product;
          if(this.variant_product=='yes')
          {
            this.variant=false;
          }
          else
          {
            
            this.variant=true;
          } 
          this.status = response.product_details.status;

          this.price = response.product_details.price;
          this.sale_price = response.product_details.saleprice;
          this.stock = response.product_details.stock;

          this.availabile_stock_status = response.product_details.availabile_stock_status;
          this.product_status= response.product_details.product_status;
          if(this.product_status==0)
          {
             this.showstat=false;
          }
          else
          {
            this.showstat=true;
          }
          this.offers= response.product_details.offers;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
         }, 500);
    }, editProdObj);
  

  }

  getbasicSubCategoriesList() {
   let subcatObj = { action:"getbasicsubcategories"}
   //alert(JSON.stringify(subcatObj));
    //this.util.showLoader();
    this.api.fetchbasicsubcategories((response: any) => {
        //this.util.hideLoader();
        if (response.status == true) {
          this.sub_categories = response;
          //alert(JSON.stringify(this.sub_categories));
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, subcatObj);
  }

   getproductTags() {
   let tagObj = { action:"getproductTags"}
    //this.util.showLoader();
    this.api.getTags((response: any) => {
        //this.util.hideLoader();
        if (response.status == true) {
          this.tags = response.tags;
        } else {
        }
    }, tagObj);
  }


  getproductBrands(subcategory) {

   let brandObj = { action:"getBrands",subcatid:subcategory}

    this.api.getBrands((response: any) => {
      setTimeout(() => {
        if (response.status == true) {
          this.brands = response.brands;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 500);

    }, brandObj);
  }
  
  getTaxList()
  {
    let taxObj = { action:"gettaxList"}

    this.api.getTax((response: any) => {
        if (response.status == true) {
          this.taxlist = response.tax;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, taxObj);
  }

   getshopCategories() {
   this.shopId = localStorage.getItem('fash_user_id');
   let catObj = { action:"getcategories", user_id:this.shopId}
    //this.util.showLoader();
    this.api.getCategories((response: any) => {
        //this.util.hideLoader();
        if (response.status == true) {
          this.categories = response.category_list;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, catObj);
  }


  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  updateProduct() {

     /* if(this.product_name=='' || this.product_name==undefined)
      {
          this.content.scrollToTop(1500);
          this.pName.setFocus();

          this.util.presentToast("Enter Product Name", 'danger', 'top', 2500);
      }
      else if(this.category=='' || this.category==undefined)
      {
         this.content.scrollToPoint(1500,67,1500);
         //this.cName.setFocus();
          this.util.presentToast("Select Category", 'danger', 'top', 2500);
      }
      else if(this.subcategory=='' || this.subcategory==undefined)
      {
         this.content.scrollToPoint(1500,112,1500);
         //this.subc_Name.setFocus();
          this.util.presentToast("Select Sub Category", 'danger', 'top', 2500);
      }
      else if(this.product_description=='' || this.product_description==undefined)
      {
         this.content.scrollToPoint(1500,170,1500);
         this.pro_desc.setFocus();
          this.util.presentToast("Enter Product Description", 'danger', 'top', 2500);
      }
      else if(this.key_fetures=='' || this.key_fetures==undefined)
      {
         this.content.scrollToPoint(1500,320,1500);
         this.key_feat.setFocus();
          this.util.presentToast("Enter Key Features", 'danger', 'top', 2500);
      }
      else if(this.manage_stock=='' || this.manage_stock==undefined)
      {
          //this.content.scrollToPoint(1500,1070,1500);
          this.util.presentToast("Select Manage Stock", 'danger', 'middle', 2500);
      }      
      else if(this.availabile_stock_status=='' || this.availabile_stock_status==undefined)
      {
          this.content.scrollToBottom(0);
          this.util.presentToast("Select Stock Status", 'danger', 'bottom', 2500);
      }
      else
      { */

          this.price_range = this.start_price_range+"-"+this.end_price_range;

         let requestProd = {action:"updateProduct",pid:this.pid,offers:this.offers,availabile_stock_status:this.availabile_stock_status,product_status:this.product_status,price_range:this.price_range,return_available:this.return_available,no_of_days:this.no_of_days};

         this.util.showLoader();
            this.api.updateProduct((response: any) => {
              
                this.util.hideLoader();
                if (response.status == true) {
                  this.util.presentToast(response.message, 'primary', 'bottom', 2500);
                } else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }

            }, requestProd);

      //}

   /* this.util.showLoader();
    setTimeout(() => {
      this.util.hideLoader();
      this.util.presentToast('Product Requested successfully', 'success', 'bottom', 2500);
      this.router.navigate(['/shopdetails', this.shopId]);
    }, 1000); */



  }

getSubcategories()
  {
    
    this.getSubCategoriesList(this.category);
    //this.subcategory='';
  }

  getSubCategoriesList(category) {
   let subcatObj = { action:"getsubcategories", catId:category}
   //alert(JSON.stringify(subcatObj));
    //this.util.showLoader();
    this.api.fetchShopSubCategories((response: any) => {
        //this.util.hideLoader();
        if (response.status == true) {
          this.sub_categories = response.subcategory_list;
          //alert(JSON.stringify(this.sub_categories));
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, subcatObj);
  }

getTax()
{
  if(this.tax=='yes')
  {
    this.taxname=true;
  }
  else
  {
    this.taxname=false;
  } 
}

getProductStatus()
{
  if(this.product_status==0)
  {
     this.showstat=false;
  }
  else
  {
    this.showstat=true;
  }
}

}

