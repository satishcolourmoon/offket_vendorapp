import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-updateversion',
  templateUrl: './updateversion.page.html',
  styleUrls: ['./updateversion.page.scss'],
})
export class UpdateversionPage implements OnInit {
  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }
  updateapp() {
    window.open("https://play.google.com/store/apps/details?id=com.offket.offketretailer", "_system");
  }

}