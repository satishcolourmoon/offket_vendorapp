import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Crop } from '@ionic-native/crop/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-productimages',
  templateUrl: './productimages.page.html',
  styleUrls: ['./productimages.page.scss'],
})
export class ProductimagesPage implements OnInit {
  vid: any;
  load : any;
  product_id: any;
  product_images: any;
  urlpath: string = 'https://offket.com/api/Vendor_api/user';

  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute, private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController, private file: File, private api: ApiService, private transfer: FileTransfer,private crop: Crop) {

  }

  ngOnInit() {
    this.vid = this.actRoute.snapshot.paramMap.get('vid');
    this.product_id = this.actRoute.snapshot.paramMap.get('product_id');
    this.getProductImages()
  }

  async getProductImages() {
    let imagesObj = { action: "getProductImages", product_id: this.product_id, variant_id: this.vid };
    this.product_images = [];
        let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.getImages((response: any) => {
      loading.dismiss();
      if (response.status == true) {
        this.product_images = response.images;
      }
      else {
        //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, imagesObj);
  }

  async deleteImage(variant_id) {
    let imagesObj = { action: "deleteProductImages", variant_id: variant_id };
    this.product_images = [];
    let loading = await this.loadingCtrl.create({
            spinner:'circles',
            message: 'Please wait',
          });
          loading.present();
    this.api.getImages((response: any) => {
       loading.dismiss();
      if (response.status == true) {
        this.product_images = response.images;
         this.util.presentToast("Image deleted Successfully", 'success', 'bottom', 2500);
        this.getProductImages();
      }
      else {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, imagesObj);
  }






  async selectImage() {
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
        }]
    });
    await actionSheet.present();
  }



  async takePicture2(sourceType)
  {

      let options: CameraOptions = {
          quality: 100,
          targetHeight: 650,
          targetWidth: 650,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
      }
      if(sourceType=='1')
      {
            this.camera.getPicture(options).then((imageData) => {
   
         let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.filepath2(base64Image);
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
          alert(JSON.stringify("Something went wrong,please try again"));
        });


    }

  }



   cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 100 }).then(newPath => {
          this.filepath2(newPath.split('?')[0]);
        },
        error => {
        //alert(JSON.stringify(error));
          //alert('Error cropping image' + error);
        }
      );
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


      this.util.showLoader();
    var params = {action: "upload_productImage", product_id: this.product_id, variant_id: this.vid};
          options1.params =params;
    const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.upload(imgurl, this.urlpath, options1, true).then((data) => {
  //alert(JSON.stringify(data));
  this.util.hideLoader();
      this.util.presentToast("Product Image Uploaded Successfully", 'success');
      this.ngOnInit();
   }, (err) => {
   this.util.hideLoader();
       alert("1 st error");
      alert(JSON.stringify(err));
    });

 }





/*
  async selectImage() {
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
        }]
    });
    await actionSheet.present();
  }



  async takePicture1(sourceType)
  {

      let options: CameraOptions = {
          quality: 75,
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

    var params = {action: "upload_productImage", product_id: this.product_id, variant_id: this.vid};
          options1.params =params;
    const fileTransfer: FileTransferObject = this.transfer.create();
        this.load=true;
  fileTransfer.upload(imgurl, this.urlpath, options1, true).then((data) => {

  loading.dismiss();
      this.util.presentToast("Product Image Uploaded Successfully", 'danger', 'bottom', 2500);
      this.getProductImages();
   }, (err) => {
       //alert("1 st error");
      //alert(JSON.stringify(err));
    });

 }
*/

}
