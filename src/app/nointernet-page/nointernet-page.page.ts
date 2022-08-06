import { Component, OnInit } from '@angular/core';

import { Platform, AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-nointernet-page',
  templateUrl: './nointernet-page.page.html',
  styleUrls: ['./nointernet-page.page.scss'],
})
export class NointernetPagePage implements OnInit {
    public back_subscription;
  constructor(private platform: Platform,private router: Router, private actRoute: ActivatedRoute,private alertCtrl: AlertController,private network: Network,public modalController: ModalController) 
  {
      this.backb();
	  	let connectSubscription = this.network.onConnect().subscribe(() => {
	        //this.viewCtrl.dismiss();
	        this.modalController.dismiss();
	      }); 
   }

    backb()
  {
    this.platform.ready().then(() => {
        this.back_subscription = this.platform.backButton.subscribe(() => {
          navigator['app'].exitApp();
        });
      });
  }

  ngOnInit() {
  }

}
