import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';
import { LoadingController, ToastController, ModalController, Platform,MenuController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-confirmregister',
  templateUrl: './confirmregister.page.html',
  styleUrls: ['./confirmregister.page.scss'],
})
export class ConfirmregisterPage implements OnInit {

  constructor(private router: Router, private loadingController: LoadingController, private util: UtilService, private api: ApiService, public modalController: ModalController, private menu : MenuController,private loadingCtrl: LoadingController) 
  { 
  		
  }

  ngOnInit() 
  {
  	
  }

  goLogin()
  {
  	this.router.navigate(['/login']);
  }

  

}
