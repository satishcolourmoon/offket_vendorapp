import { Component, OnInit,ViewChild  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';

import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
	pid:any;
	productdetails:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController,
    private file: File, private api: ApiService,private sanitizer:DomSanitizer) 
    { 

    }

  ngOnInit() 
  {
  	this.pid=this.actRoute.snapshot.paramMap.get('pid');
  	this.getproductDetails();
  }

  async getproductDetails()
  {
   	let prodObj = { action:"getSingleProduct",pid:this.pid}
     let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
	    this.api.getProductData((response: any) => {
          loading.dismiss();
	        if (response.status == true) 
	        {
	          this.productdetails = response.product_details;
	          //alert(JSON.stringify(this.productdetails));
	        }
	        else 
	        {
	          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
	        }
	    }, prodObj);
  }

}
