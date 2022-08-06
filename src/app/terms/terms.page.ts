import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {
	description:any;
  title:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,public modalController: ModalController,private sanitizer:DomSanitizer) { }

  ngOnInit() {
  this.getterms();
  }

  getterms() {
    let termsObj = { action: "termsandconditions" }

    this.api.fetchTerms((response: any) => {
          
          this.title=response.title
          this.description = response.description;
    }, termsObj);
  }

}
