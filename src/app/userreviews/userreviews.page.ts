import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform,LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-userreviews',
  templateUrl: './userreviews.page.html',
  styleUrls: ['./userreviews.page.scss'],
})
export class UserreviewsPage implements OnInit {
	vendor_id:any;
	reviews:any;
	nval:any;
  pack_type:any;
  shopId:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,
    private loadingCtrl: LoadingController, public alertController: AlertController) { }

  ngOnInit() 
  {
  	this.vendor_id=localStorage.getItem('fash_user_id');
  	
  }

   ionViewWillEnter()
  {
   this.getpackageReport();
  this.vendorReviews();
  }



 async getpackageReport() 
  {
  this.shopId = localStorage.getItem('fash_user_id');

    let catObj = { action: "vendor_package",vendor_id:this.shopId }
    this.api.getPackageReport((response: any) => {
        if(response.status == true) 
        {
          this.pack_type = response.status;
        } 
        else 
        {
           this.router.navigate(['plans']);
        }

    }, catObj);
  }

  async vendorReviews() {

    let reviewObj = { action: "vendorReview", vendor_id: this.vendor_id };
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.fetchReviews((response: any) => {
    loading.dismiss();
        if (response.status == true) {
          this.reviews = response.reviews;
          this.nval=true;
        }
        else {
        	this.nval=false;
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }


    }, reviewObj);
  }
}
