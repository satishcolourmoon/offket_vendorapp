import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mypackage',
  templateUrl: './mypackage.page.html',
  styleUrls: ['./mypackage.page.scss'],
})
export class MypackagePage implements OnInit {
	mypackages:any=[];
	vendor_id:any;
  status:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, private loadingCtrl: LoadingController, private menu : MenuController) 
    {
    	
     }

  ngOnInit() {
 		
  }

   ionViewDidEnter() {
      this.menu.enable(true);
      this.vendor_id=localStorage.getItem('fash_user_id');
       this.usermyPackages();
    }

  usermyPackages()
  {
  		let vendorObj = {action:"mypackages",vendor_id:this.vendor_id};
	    this.api.myPackages((response: any) => {
      if(response.status==true)
      {
         this.mypackages= response.mypackages;
         this.status=response.status;
      }
      else
      {
         this.mypackages=[];
         this.status=response.status;
      }
	           
	    }, vendorObj);
  }

}
