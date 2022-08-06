import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
mobile:any;
email:any;
image:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,public modalController: ModalController) { }

  ngOnInit() {
  this.contactus();
  }

  contactus() {
    let Obj = { action: "support" }
    // this.util.showLoader();
    this.api.fetchSupport((response: any) => {
        this.util.hideLoader();
          this.email = response.email;
          this.mobile = response.mobile;
          this.image = response.image;
    }, Obj);
  }

}
