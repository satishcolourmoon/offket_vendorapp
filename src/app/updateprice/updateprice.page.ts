import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

declare var $: any;
@Component({
  selector: 'app-updateprice',
  templateUrl: './updateprice.page.html',
  styleUrls: ['./updateprice.page.scss'],
})
export class UpdatepricePage implements OnInit {
price:any;
saleprice:any;
stock:any;
link_variants:any;
pid:any;
link_variant_id:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController,public modalController: ModalController,navParams: NavParams) 
    { 
        this.link_variant_id = navParams.get('link_variant_id');
        this.pid = navParams.get('pid');
        this.price = navParams.get('price');
        this.saleprice = navParams.get('saleprice');
        this.stock = navParams.get('stock');
        
     }

  ngOnInit() 
  {
      $("#price").val(this.price);
        $("#saleprice").val(this.saleprice);
        $("#stock").val(this.stock);
  }

  updatePrice()
  {
  	this.price = $("#price").val();
  	this.saleprice = $("#saleprice").val();
  	this.stock = $("#stock").val();
  	if(this.price==undefined || this.price=='')
  	{
  		this.util.presentToast("Enter Price", 'danger', 'bottom', 2500);
  	}
  	else if(this.saleprice==undefined || this.saleprice=='')
  	{
  		this.util.presentToast("Enter Sale Price", 'danger', 'bottom', 2500);
  	}
  	else if(parseInt(this.price)<parseInt(this.saleprice))
  	{
  		this.util.presentToast("Please enter the Original Product Price grater than the Your Commission Price", 'danger', 'bottom', 2500);
  	}
  	else if(this.stock==undefined || this.stock=='')
  	{
  		this.util.presentToast("Enter Stock", 'danger', 'bottom', 2500);
  	}
  	else
  	{
  			let updatpricesObj = {action:"updatePrice",product_id:this.pid,variant_id:this.link_variant_id,price:this.price,saleprice:this.saleprice,stock:this.stock};
                this.util.showLoader();
                this.api.updatPrices((response: any) => {
                    this.util.hideLoader();
                    if (response.status == true) 
                    {
                      this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                      		let linkvariantsObj = {action:"getlink_variants",pid:this.pid};
			                this.link_variants = [];
			                this.api.fetchLinkVariants((response: any) => {
			                      this.link_variants = response.link_variants;
			                      this.modalController.dismiss(this.link_variants);
			                }, linkvariantsObj);
                    } 
                    else 
                    {
                      this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                    }
                }, updatpricesObj);
  	}
  }

  dismiss() {

  		let linkvariantsObj = {action:"getlink_variants",pid:this.pid};
                this.link_variants = [];
  
                this.api.fetchLinkVariants((response: any) => {
                      this.link_variants = response.link_variants;
                      this.modalController.dismiss(this.link_variants);
                    
                }, linkvariantsObj);

    
  }

}
