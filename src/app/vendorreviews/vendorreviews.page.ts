import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendorreviews',
  templateUrl: './vendorreviews.page.html',
  styleUrls: ['./vendorreviews.page.scss'],
})
export class VendorreviewsPage implements OnInit {
	vendor_id:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, private loadingCtrl: LoadingController, private menu : MenuController) { }

  ngOnInit() 
  {
  		this.vendor_id = this.actRoute.snapshot.paramMap.get('vendor_id');

  }

}
