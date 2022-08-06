import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Crop } from '@ionic-native/crop/ngx';
@Component({
  selector: 'app-create-banners',
  templateUrl: './create-banners.page.html',
  styleUrls: ['./create-banners.page.scss'],
})
export class CreateBannersPage implements OnInit {
	id:any;
	title:any;

	croppedImagepath = "";

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

    urlpath: string = 'https://offket.com/api/Vendor_api/user';
	image:any;
	imagepath:any;
	shopId:any;
	update_image:any;
  imagefile:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute, private router: Router, private api: ApiService, public popoverController: PopoverController,private loadingCtrl: LoadingController,private camera: Camera, private actionSheetController: ActionSheetController, private file: File, private transfer: FileTransfer,private crop: Crop) { }

  ngOnInit() {
  this.id = this.actRoute.snapshot.paramMap.get('id');
  this.image = this.actRoute.snapshot.paramMap.get('image');
  this.imagefile = this.actRoute.snapshot.paramMap.get('imagefile');
  this.title = this.actRoute.snapshot.paramMap.get('title');
  }



  async changeImage() {
    const actionSheet = await this.actionSheetController.create({
        cssClass: 'signupbtn',
        buttons: [{
          text: 'Upload Photo',
        role: 'destructive',
        icon: 'ios-image',
        handler: () => {
          this.takePicture2(0);
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
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
      }
      if(sourceType=='1')
      {
            this.camera.getPicture(options).then((imageData) => {
                this.cropImage(imageData);
            }, (err) => {
          });
    }
    else
    {
          var optionss = {
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType: this.camera.DestinationType.FILE_URI,
        };
        this.camera.getPicture(optionss).then((imageData) => {
        this.cropImage(imageData);
        }, (err) => {
          //alert(JSON.stringify(err));
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


      //this.util.showLoader();
    var params = {action: "uploadBanner"};
          options1.params =params;
    const fileTransfer: FileTransferObject = this.transfer.create();
  fileTransfer.upload(imgurl, this.urlpath, options1, true).then((data) => {
 // this.util.hideLoader();

 		this.imagepath=data.response;
    this.title=this.title;
      this.util.presentToast("Banner Changed Successfully", 'success');
   }, (err) => {
       //alert("1 st error");
      //alert(JSON.stringify(err));
    });

 }


 async addBanner()
 {
 	this.shopId = localStorage.getItem('fash_user_id');
  		if(this.title=='' || this.title==undefined)
  		{
  			this.util.presentToast("Enter Title", 'danger', 'top', 2500);
  		}
  		else if(this.imagepath=='' || this.imagepath==undefined)
  		{
  			this.util.presentToast("Select Image", 'danger', 'top', 2500);
  		}
  		else
  		{  				

  				let catObj = { action: "addbanner", vendor_id: this.shopId,title:this.title,imagepath:this.imagepath }
				    let loading = await this.loadingCtrl.create({
				                    spinner:'circles',
				                    message: 'Please wait',
				                  });
				                  loading.present();
				    this.api.addBannerdata((response: any) => {
				      loading.dismiss();
				        if (response.status == true) {
				        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
				          this.router.navigate(['offer-banners']);
				        } else {

				          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
				        }

				    }, catObj);
  		}
 }


 async updateBanner()
 {
 	this.shopId = localStorage.getItem('fash_user_id');
  		if(this.title=='' || this.title==undefined)
  		{
  			this.util.presentToast("Enter Coupon", 'danger', 'top', 2500);
  		}
  		
  		else
  		{
       
  				if(this.imagepath=='' || this.imagepath==undefined)
  				{
  					this.update_image=this.imagefile;
  				}
  				else
  				{
  					this.update_image=this.imagepath;
  				}
           //alert(JSON.stringify(this.imagepath));
  				let catObj = { action: "updatebanner", vendor_id: this.shopId,title:this.title,imagepath:this.update_image,id:this.id }
				    let loading = await this.loadingCtrl.create({
				                    spinner:'circles',
				                    message: 'Please wait',
				                  });
				                  loading.present();
				    this.api.updateBannerdata((response: any) => {
				      loading.dismiss();
				        if (response.status == true) {
				        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
				          this.router.navigate(['offer-banners']);
				        } else {

				          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
				        }

				    }, catObj);
  		}
 }


}
