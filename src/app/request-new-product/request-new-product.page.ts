import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';


import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-request-new-product',
  templateUrl: './request-new-product.page.html',
  styleUrls: ['./request-new-product.page.scss'],
})
export class RequestNewProductPage implements OnInit {

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
   availabile_stock_status:any;
   showdays:any;
   no_of_days:any;
   imagepath:any=[];
   images:any=[];
products:any;
nval:any;
exchangestatus:any;
pid:any;
product_details:any;
best_on_offket:any;
product_status:any;
offers:any;
price_range:any;
showstat:any;
catId:any;
types:any;
type:any;
start_price_range:any;
end_price_range:any;
       urlpath: string = 'https://offket.com/api/Vendor_api/user';
  constructor(private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private api: ApiService,private camera: Camera, private actionSheetController: ActionSheetController, private file: File, private transfer: FileTransfer,private crop: Crop,private imagePicker: ImagePicker) {

    this.product_startdate = (new Date().getDay() - 1).toString() + '-' +(new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
    this.taxname=false;
    this.variant=false;
    this.showdays=false;
    this.product_status="0";
  }

  ngOnInit() {
    this.catId= this.actRoute.snapshot.paramMap.get('catId');
    this.shopId = this.actRoute.snapshot.paramMap.get('shopId');
    this.getshopCategories();
    this.getproductTags();
    this.getproductBrands();
    //this.getproductTypes();
    this.getTaxList();
  }

   getproductTags() {
   let tagObj = { action:"getproductTags"}
   //alert(JSON.stringify(catObj));
    //this.util.showLoader();
    this.api.getTags((response: any) => {
      setTimeout(() => {
        //this.util.hideLoader();
        if (response.status == true) {
          this.tags = response.tags;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 500);

    }, tagObj);
  }

  getproductBrands() {

   let brandObj = { action:"getBrands",subcatid:this.subcategory}

    this.api.getBrands((response: any) => {
      setTimeout(() => {
        if (response.status == true) {
          this.brands = response.brands;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 500);

    }, brandObj);

     this.getproductTypes();
  }


  getproductTypes() {

   let brandObj = { action:"getTypes",subcatid:this.subcategory}

    this.api.getTypes((response: any) => {
     
        if (response.status == true) {
          this.types = response.types;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, brandObj);
  }
  
  getTaxList()
  {
    let taxObj = { action:"gettaxList"}

    this.api.getTax((response: any) => {
      setTimeout(() => {
        if (response.status == true) {
          this.taxlist = response.tax;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 500);

    }, taxObj);
  }

   getshopCategories() {
   let catObj = { action:"getcategories", user_id:this.shopId}
   //alert(JSON.stringify(catObj));
    this.util.showLoader();
    this.api.getCategories((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
        if (response.status == true) {
          this.categories = response.category_list;
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 500);

    }, catObj);
  }

 

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  doProduct() {
      if(this.product_name=='' || this.product_name==undefined)
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
      else if(this.variant_product=='' || this.variant_product==undefined)
      {
          this.util.presentToast("Select Product Variant", 'danger', 'bottom', 2500);
      }
      else
      {
          this.price_range = this.start_price_range+"-"+this.end_price_range;
          
         let requestProd = {action:"requestProduct",shop_id:this.shopId,name:this.product_name,cat_id:this.category,sub_cat_id:this.subcategory,key_features:this.key_fetures,description:this.product_description,product_tags:this.product_tags,type:this.type,brand:this.brand,variant_product:this.variant_product,manage_stock:this.manage_stock,price:this.price,saleprice:this.sale_price,stock:this.stock,availabile_stock_status:this.availabile_stock_status,product_status:this.product_status,imagepath:this.imagepath,offers:this.offers,price_range:this.price_range};

         this.util.showLoader();
            this.api.requestProduct((response: any) => {
                this.util.hideLoader();
                if (response.status == true) {
                  this.util.presentToast(response.message, 'primary', 'bottom', 2500);
                  if(this.variant_product=='yes')
                  {
                    this.router.navigate(['addvariant',{pid:response.product_id,page:"product"}]);
                  }
                  else
                  {
                    this.router.navigate(['linkproducts',{pid:response.product_id,page:"product"}]);
                  }
                  
                } else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
            }, requestProd);

      }

   /* this.util.showLoader();
    setTimeout(() => {
      this.util.hideLoader();
      this.util.presentToast('Product Requested successfully', 'success', 'bottom', 2500);
      this.router.navigate(['/shopdetails', this.shopId]);
    }, 1000); */



  }


  getItems(ev: any) {

  this.shopId = localStorage.getItem('fash_user_id');

    let keyword = ev.target.value;
      if (keyword == '' || keyword == undefined) 
      {
          this.nval=0;
      }
      else
      {

        let otpObj = {action:"searchProducts",keyword: keyword,shopId:this.shopId}

          this.api.searchProducts((response: any) => {
            this.nval=1;
                this.products = response;
                      if(this.products.length==0)
                      {
                         this.nval='false';
                      }
          }, otpObj);

      }

  }


   getProductData(pid)
  {
   this.nval='false';

   let editProdObj = { action:"getSingleProduct",pid:pid}
    this.api.getProductData((response: any) => {
        if (response.status == true) {
          this.product_details = response.product_details;
          //alert(JSON.stringify(this.product_details));
          this.pid=response.product_details.id;
          this.product_name = response.product_details.name;
          this.category = response.product_details.cat_id;
          
          this.subcategory = response.product_details.sub_cat_id;
          this.product_description = response.product_details.description;
          this.key_fetures = response.product_details.key_features;
          this.product_startdate = response.product_details.selling_date;

              var str = response.product_details.product_tags;
        this.product_tags = str.split(",");
          this.meta_tag_title = response.product_details.meta_tag_title;

          this.meta_tag_description = response.product_details.meta_tag_description;
          this.meta_tag_keywords = response.product_details.meta_tag_keywords;
          this.brand = response.product_details.brand_id;
          this.no_of_days=response.product_details.no_of_days;
          this.cancel_available = response.product_details.cancel_status;
          this.return_available = response.product_details.return_status;
          this.exchangestatus= response.product_details.exchangestatus;
          this.manage_stock = response.product_details.manage_stock;
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
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
    }, editProdObj);
  

  }




  getSubcategories()
  {
    
    this.getSubCategoriesList(this.category);
    this.subcategory='';
  }


  getSubCategoriesList(category) {
   let subcatObj = { action:"getsubcategories", catId:category}
   //alert(JSON.stringify(subcatObj));
    this.util.showLoader();
    this.api.fetchShopSubCategories((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
        if (response.status == true) {
          this.sub_categories = response.subcategory_list;
          //alert(JSON.stringify(this.sub_categories));
        } else {
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }
      }, 500);

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


getDays()
{
   if(this.cancel_available=='yes' || this.return_available=='yes')
  {
      this.showdays=true;
  }
  else if(this.cancel_available=='no' && this.return_available=='no')
  {
      this.showdays=false;
  }
}


getVariantProduct()
{
  if(this.variant_product=='yes')
  {
    
    this.variant=false;
  }
  else
  {
    this.variant=true;
  } 
}




 async selectPictures() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType) {
      this.imagePicker.getPictures({
    maximumImagesCount: 5,
    outputType: 1
  }).then(selectedImg => {
    selectedImg.forEach(i =>{
    
    let options1: FileUploadOptions = {
         
         fileKey: 'image',
         fileName: 'name.jpg',
         headers: {},
         chunkedMode: false,
         mimeType: 'image/jpg'
    }

    var params = {action: "uploadProductImages"};
          options1.params =params;
    const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.upload("data:image/jpeg;base64," + i, this.urlpath, options1, true).then((data) => {
    this.imagepath.push(data.response);

    //this.title=this.title;
      //this.util.presentToast("Banner Changed Successfully", 'success');
   }, (err) => {
       //alert("1 st error");
      //alert(JSON.stringify(err));
    });


     this.images.push("data:image/jpeg;base64," + i);

     });
  })
  }



existingProduct(catId)
{
  //this.router.navigate(['/existingproduct']);
  this.router.navigate(['clone-categorieslist',{catId:catId}]);
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
