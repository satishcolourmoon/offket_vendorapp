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
  selector: 'app-vm-editprofile',
  templateUrl: './vm-editprofile.page.html',
  styleUrls: ['./vm-editprofile.page.scss'],
})
export class VmEditprofilePage implements OnInit {
	vm_id:any;
	email:any;
	name:any;
	mobile:any;
	vendordetails:any;
	address:any;
  constructor(private camera: Camera, private util: UtilService, private router: Router, private actRoute: ActivatedRoute, private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController, private file: File, private api: ApiService, private transfer: FileTransfer) { 

  }

  ngOnInit() {
  this.vm_id = localStorage.getItem('fash_user_id');
  this.getvmDetails();
  }

   async getvmDetails() {

    let profileObj = { action: "getmarchantProfile", vm_id: this.vm_id };
        	 let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
		    this.api.getMarchantData((response: any) => {
		      loading.dismiss();
		        this.vendordetails = response;
		        this.name = response.name;
		        this.email = response.email;
		        this.mobile = response.mobile;
		        this.address = response.address;
		    }, profileObj);

  }

  async doupdateprofile()
  {
     let vmObj = { action: "updatevmProfile", vm_id: this.vm_id,name:this.name,address:this.address };

        	 let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
		    this.api.updatevmProfile((response: any) => {
		      loading.dismiss();
		        this.util.presentToast("Profile Updated Successfully", 'danger', 'bottom', 2500);
		        this.getvmDetails();
		    }, vmObj);
  }

}
