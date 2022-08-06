import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  public image1;
  public image2;
  public image3;
  public image4;
  public shopId;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File,) {
    this.shopId = this.actRoute.snapshot.params.shop_id;
  }

  ngOnInit() {
  }

  async selectImage(type) {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA, type);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType, type) {
    var options: CameraOptions = {
      quality: 80,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      if (type == 'image1') {
        this.image1 = base64Image;
      } else if (type == 'image2') {
        this.image2 = base64Image;
      } else if (type == 'image3') {
        this.image3 = base64Image;
      } else if (type == 'image4') {
        this.image4 = base64Image;
      }
    }, (err) => {
      // Handle error
    });
  }

  doProduct() {
    this.util.showLoader();
    setTimeout(() => {
      this.util.hideLoader();
      this.util.presentToast('Product added successfully', 'success', 'bottom', 2500);
      this.router.navigate(['/shopdetails', this.shopId]);
    }, 1000);

  }

}
