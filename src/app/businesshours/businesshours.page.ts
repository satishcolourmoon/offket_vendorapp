import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-businesshours',
  templateUrl: './businesshours.page.html',
  styleUrls: ['./businesshours.page.scss'],
})
export class BusinesshoursPage implements OnInit {
	vendor_id:any;
	working_hours:any;
	open_time:any;
	closed_time:any;
	weekname:any;
	working:any;
  showadd:any;
  editshow:any;
  wid:any;
  page:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, public alertController: AlertController,private loadingCtrl: LoadingController) { }

  ngOnInit() 
  {
  	this.vendor_id = localStorage.getItem('fash_user_id');
  	this.getShopWorkingHours();
  }
  async getShopWorkingHours() {
    let busiObj = { action: "getshopworkinghours",vendor_id: this.vendor_id };
        let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchBusinessHours((response: any) => {
        loading.dismiss();
        if (response.status == true) 
        {
          this.working_hours = response.working_hours;
        }
        else {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, busiObj);
  }


  async saveWorkingHours()
  {	
  		if(this.weekname=="" || this.weekname==undefined)
  		{
  			this.util.presentToast("Select Week day", 'danger', 'top', 2500);
  		}
  		else if(this.working=="" || this.working==undefined)
  		{
  			this.util.presentToast("Select Working", 'danger', 'top', 2500);
  		}
  		else if(this.open_time=="" || this.open_time==undefined)
  		{
  			this.util.presentToast("Select Open Time", 'danger', 'top', 2500);
  		}
  		else if(this.closed_time=="" || this.closed_time==undefined)
  		{
  			this.util.presentToast("Select Closed Time", 'danger', 'top', 2500);
  		}
  		else
  		{
  			let workObj = { action: "addBusinessHours",vendor_id: this.vendor_id,open_time: this.open_time,closed_time: this.closed_time,weekname: this.weekname,working: this.working };
		        let loading = await this.loadingCtrl.create({
		                    spinner:'circles',
		                    message: 'Please wait',
		                  });
		                  loading.present();
		    this.api.createBusinessHours((response: any) => {
				        loading.dismiss();
				        if (response.status == true) 
				        {
				          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  this.getShopWorkingHours();
				        }
				        else {
				          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
				        }
		    }, workObj);
  	    }
}



 async updateWorkingHours()
  { 
      if(this.weekname=="" || this.weekname==undefined)
      {
        this.util.presentToast("Select Week day", 'danger', 'top', 2500);
      }
      else if(this.working=="" || this.working==undefined)
      {
        this.util.presentToast("Select Working", 'danger', 'top', 2500);
      }
      else if(this.open_time=="" || this.open_time==undefined)
      {
        this.util.presentToast("Select Open Time", 'danger', 'top', 2500);
      }
      else if(this.closed_time=="" || this.closed_time==undefined)
      {
        this.util.presentToast("Select Closed Time", 'danger', 'top', 2500);
      }
      else
      {
        let workObj = { action: "updateBusinessHours",vendor_id: this.vendor_id,open_time: this.open_time,closed_time: this.closed_time,weekname: this.weekname,working: this.working,wid:this.wid };
            let loading = await this.loadingCtrl.create({
                        spinner:'circles',
                        message: 'Please wait',
                      });
                      loading.present();
        this.api.updateBusinessHours((response: any) => {
                loading.dismiss();
                if (response.status == true) 
                {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  this.getShopWorkingHours();
                }
                else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
        }, workObj);
        }
}



addBusiness()
{
  this.showadd=true;
}

closeaddbusi()
{
  this.showadd=false;
  this.editshow=false;
}

editBusiness(wid)
{

    this.editshow=true;
    this.showadd=false;

    this.wid=wid.id;
    this.weekname=wid.weekname;
    this.working=wid.working;
    this.open_time=wid.open_time;
    this.closed_time=wid.closed_time;

}


async deleteHours(bid)
{
    let delObj = { action: "deleteBuss",vendor_id: this.vendor_id,bid:bid };
            let loading = await this.loadingCtrl.create({
                        spinner:'circles',
                        message: 'Please wait',
                      });
                      loading.present();
        this.api.deleteBussHours((response: any) => {
                loading.dismiss();
                if (response.status == true) 
                {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  this.getShopWorkingHours();
                }
                else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }
        }, delObj);
}

}