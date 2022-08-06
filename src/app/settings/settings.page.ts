import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	current_password:any;
	new_password:any;
	confirm_password:any;
  login_type:any;
  user_id:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,public modalController: ModalController) { }

  ngOnInit() 
  {
  		   this.login_type = localStorage.getItem('fash_user_type');
         this.user_id = localStorage.getItem('fash_user_id');
  }

  changePassword()
  {
      if(this.current_password==undefined || this.current_password=="")
      {
      		this.util.presentToast("Enter Current Password", 'danger', 'bottom', 2500);
      }
      else if(this.new_password==undefined || this.new_password=="")
      {
      		this.util.presentToast("Enter New Password", 'danger', 'bottom', 2500);
      }
      else if(this.confirm_password==undefined || this.confirm_password=="")
      {
      		this.util.presentToast("Enter Confirm Password", 'danger', 'bottom', 2500);
      }
      else if(this.new_password!=this.confirm_password)
      {
      		this.util.presentToast("Password Mismatched", 'danger', 'bottom', 2500);
      }
      else
      {
      		let passwordObj = {action:"changePassword",login_type:this.login_type,user_id:this.user_id,current_password:this.current_password,new_password:this.new_password};
                
                //this.util.showLoader();
                this.api.changePassword((response: any) => {
                    //this.util.hideLoader();
                    if (response.status == true) 
                    {
                      this.util.presentToast(response.message, 'primary', 'bottom', 2500);
                      this.current_password="";
                      this.new_password="";
                      this.confirm_password="";
                    } 
                    else 
                    {
                      this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, passwordObj);
      }
  		
  }

}
