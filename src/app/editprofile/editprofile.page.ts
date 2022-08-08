import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
		  urlpath: string = 'https://offket.com/api/Vendor_api/user';
		  address:any;
		  vendor_id:any;
		  vendordetails:any;
		  shop_name:any;
		  owner_name:any;
		  email:any;
		  description:any;
		  mobile:any;
		  shop_image:any;
		  shop_logo:any;
		  city:any;
		  pincode:any;
      delivery_time:any;
      min_order_amount:any;
      bank_ifsccode:any;
      accountholder_name:any;
      bankname:any;
      gst_number:any;
      aadhar:any;
      pan:any;
      alternative_mobile:any;
      account_no:any;
      update_status:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute, private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController, private file: File, private api: ApiService, private transfer: FileTransfer) { }

  ngOnInit() {
  this.vendor_id = localStorage.getItem('fash_user_id');
  
  }

  ionViewWillEnter()
  {
  this.getVendorDetails();
  }

   async getVendorDetails() {
    let profileObj = { action: "getvendorProfile", vendor_id: this.vendor_id };
        let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.getVendorData((response: any) => {
      loading.dismiss();
        this.vendordetails = response;
        this.shop_name = response.shop_name;
        this.owner_name = response.owner_name;
        this.email = response.email;
        this.description = response.description;
        this.mobile = response.mobile;
        this.address = response.address;
        this.shop_image = response.shop_image;
        this.shop_logo = response.shop_logo;
         this.city = response.city;
          this.pincode = response.pincode;
          this.delivery_time=response.delivery_time;
          this.min_order_amount=response.min_order_amount;

          this.pan=response.pan;
          this.aadhar=response.aadhar;
          this.gst_number=response.gst_number;
          this.bankname=response.bankname;
          this.accountholder_name=response.accountholder_name;
          this.bank_ifsccode=response.bank_ifsccode;
          this.alternative_mobile=response.alternative_mobile;
           this.account_no=response.account_no;
           this.update_status=response.update_status;

    }, profileObj);
  }


  async changeCoverPhoto() {
    const actionSheet = await this.actionSheetController.create({
        cssClass: 'signupbtn',
        buttons: [{
          text: 'Upload Photo',
        role: 'destructive',
        icon: 'ios-image',
        handler: () => {
          this.takePicture1(0);
          }
        },{
          text: 'Camera',
        role: 'destructive',
        icon: 'ios-camera',
        handler: () => {
          this.takePicture1(1);
          }
        }
        ]
    });
    await actionSheet.present();
  }



  async takePicture1(sourceType)
  {

      let options: CameraOptions = {
          quality: 100,
          targetHeight: 650,
          targetWidth: 650,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
      }
      if(sourceType=='1')
      {
            this.camera.getPicture(options).then((imageData) => {
                this.filepath1(imageData);
            }, (err) => {
          });
    }
    else
    {
          var optionss = {
          quality: 100,
          targetHeight: 650,
          targetWidth: 650,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.FILE_URI
        };
        this.camera.getPicture(optionss).then((imageData) => {
        this.filepath1(imageData);
        }, (err) => {
          //alert(JSON.stringify(err));
        });


    }

  }

  async filepath1(imgurl)
  {
    let options1: FileUploadOptions = {
         fileKey: 'image',
         fileName: 'name.jpg',
         headers: {},
         chunkedMode: false,
         mimeType: 'image/jpg'
    }


      let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    var params = {action: "upload_shopimage", vendor_id: this.vendor_id};
          options1.params =params;
    const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.upload(imgurl, this.urlpath, options1, true).then((data) => {

  loading.dismiss();
      this.util.presentToast("Shop Cover Photo Changed Successfully", 'danger', 'bottom', 2500);
      this.getVendorDetails();
   }, (err) => {
       //alert("1 st error");
      //alert(JSON.stringify(err));
    });

 }






 async changelogoPhoto() {
    const actionSheet = await this.actionSheetController.create({
        cssClass: 'signupbtn',
        buttons: [{
          text: 'Upload Photo',
        role: 'destructive',
        icon: 'ios-image',
        handler: () => {
          this.takePicture2(0);
          }
        },{
          text: 'Camera',
        role: 'destructive',
        icon: 'ios-camera',
        handler: () => {
          this.takePicture2(1);
          }
        } 

        ]
    });
    await actionSheet.present();
  }



  async takePicture2(sourceType)
  {

      let options: CameraOptions = {
          quality: 100,
          targetHeight: 650,
          targetWidth: 650,

          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
      }
      if(sourceType==1)
      {
            this.camera.getPicture(options).then((imageData) => {
            //alert(JSON.stringify(imageData));
                this.filepath2(imageData);
            }, (err) => {
          });
      }
      else
      {
            var optionss = {
            quality: 100,
          targetHeight: 650,
          targetWidth: 650,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI
          };
          this.camera.getPicture(optionss).then((imageData) => {
          this.filepath2(imageData);
          }, (err) => {
            //alert(JSON.stringify(err));
          });


      }

  }

  async filepath2(imgurl)
  {
    let options1: FileUploadOptions = {
         fileKey: 'image',
         fileName: 'name.jpg',
         headers: {},
         chunkedMode: false,
         mimeType: 'image/jpg'
    }


      let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    var params = {action: "upload_logoimage", vendor_id: this.vendor_id};
          options1.params =params;
    const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.upload(imgurl, this.urlpath, options1, true).then((data) => {

  loading.dismiss();
      this.util.presentToast("Shop Cover Photo Changed Successfully", 'danger', 'bottom', 2500);
      this.getVendorDetails();
   }, (err) => {
       //alert("1 st error");
     // alert(JSON.stringify(err));
    });

 }


notchange()
{
  this.util.presentToast("Please Contact Admin ", 'danger', 'bottom', 2500);
}

 async doupdateprofile()
 {
 		if(this.shop_name=='' || this.shop_name==undefined)
 		{
 			this.util.presentToast("Enter Shop Name", 'danger', 'bottom', 2500);
 		}
 		else if(this.owner_name=='' || this.owner_name==undefined)
 		{
 			this.util.presentToast("Enter Owner Name", 'danger', 'bottom', 2500);
 		}
 		else if(this.min_order_amount=='' || this.min_order_amount==undefined)
 		{
 			this.util.presentToast("Enter Delivery Amount", 'danger', 'bottom', 2500);
 		}
 		else if(this.address=='' || this.address==undefined)
 		{
 			this.util.presentToast("Enter Address", 'danger', 'bottom', 2500);
 		}
   /* else if(this.alternative_mobile=='' || this.alternative_mobile==undefined)
    {
      this.util.presentToast("Enter Alternative Mobile", 'danger', 'bottom', 2500);
    }
    else if(this.pan=='' || this.pan==undefined)
    {
      this.util.presentToast("Enter PAN", 'danger', 'bottom', 2500);
    }
    else if(this.aadhar=='' || this.aadhar==undefined)
    {
      this.util.presentToast("Enter Aadhar Number", 'danger', 'bottom', 2500);
    }
    else if(this.gst_number=='' || this.gst_number==undefined)
    {
      this.util.presentToast("Enter GST Number", 'danger', 'bottom', 2500);
    }
    else if(this.bankname=='' || this.bankname==undefined)
    {
      this.util.presentToast("Enter Bank Name", 'danger', 'bottom', 2500);
    }
    else if(this.accountholder_name=='' || this.accountholder_name==undefined)
    {
      this.util.presentToast("Enter Account Holder Name", 'danger', 'bottom', 2500);
    }
    else if(this.bank_ifsccode=='' || this.bank_ifsccode==undefined)
    {
      this.util.presentToast("Enter bank IFSC code", 'danger', 'bottom', 2500);
    } */
 		else 
 		{
 		let editObj = { action: "updateProfiledetails",shop_name:this.shop_name,owner_name:this.owner_name,description:this.description,address:this.address,vendor_id:this.vendor_id,alternative_mobile:this.alternative_mobile,pan:this.pan,aadhar:this.aadhar,gst_number:this.gst_number,bankname:this.bankname,accountholder_name:this.accountholder_name,bank_ifsccode:this.bank_ifsccode,account_no:this.account_no,min_order_amount:this.min_order_amount };
			        let loading = await this.loadingCtrl.create({
			                    spinner:'circles',
			                    message: 'Please wait',
			                  });
			                  loading.present();
			    this.api.doupdateProfiledetails((response: any) => {
			      loading.dismiss();
			      if (response.status == true) {
			        this.util.presentToast(response.message, 'success', 'bottom', 2500);
			      }
			      else {
			        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
			      }
			    }, editObj);
 		}	
 }

}
