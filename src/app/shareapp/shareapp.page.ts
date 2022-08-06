import { Component, OnInit,ViewChild  } from '@angular/core';
import { ModalController, Platform, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

import { ApiService } from 'src/app/services/api.service';

import { IonContent } from '@ionic/angular';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-shareapp',
  templateUrl: './shareapp.page.html',
  styleUrls: ['./shareapp.page.scss'],
})
export class ShareappPage implements OnInit {
share_title:any;
playstore_vendorlink:any;
  constructor(private util: UtilService, private router: Router, private actRoute: ActivatedRoute, private loadingCtrl: LoadingController, private actionSheetController: ActionSheetController, private api: ApiService,private socialSharing: SocialSharing) { }

  ngOnInit() {
  this.share();
  }

   async share() {

    let reviewObj = { action: "socialshare"};
    let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();

    this.api.fetchReviews((response: any) => {
    loading.dismiss();
          this.share_title = response.share_title;
          this.playstore_vendorlink = response.playstore_vendorlink;

    }, reviewObj);
  }


  shareInfo(share_title,playstore_vendorlink)
    {
        let text = share_title;
        this.socialSharing.share(text, "", "", playstore_vendorlink).then(() => {
        }).catch(() => {
            // Error!
        }); 

    } 

}
