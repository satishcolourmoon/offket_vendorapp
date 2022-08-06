import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {
title:any;
pid:any;
plans:any;
order_id:any;
vendor_id:any;
mobile:any;
email:any;
name:any;
i:any;
description:any;
check:any;
amount:any;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, private loadingCtrl: LoadingController, private menu : MenuController) { 
this.pid = this.actRoute.snapshot.paramMap.get('pid');
this.title = this.actRoute.snapshot.paramMap.get('title');
    this.vendor_id=localStorage.getItem('fash_user_id');
  }

  ionViewDidEnter() {
      this.menu.enable(true);
      this.getPlans();
    }

  async getPlans() {
  let vendorObj = {action:"getSubscription",pid:this.pid};
    this.api.fetchSubscription((response: any) => {
      console.log(response);
      if (response.status == true) {
        this.plans= response.plans;
        this.check=this.plans[0]['id'];
        this.amount=this.plans[0]['amount'];
        this.planlist(this.plans[0]);
      }
    }, vendorObj);
  }

  async buyNow(pid,amount)
  {
      let vendorObj = {action:"razerpayOrder_id",grand_total:amount,vendor_id:this.vendor_id};
      this.api.generateRazerpay((response: any) => {
      if(response.status==true)
      {
            this.order_id= response.order_id;
            this.name=response.name;
            this.email=response.email;
            this.mobile=response.mobile;
            this.payWithRazor(pid,amount,this.order_id,this.name,this.email,this.mobile,this.vendor_id);
      }
      else
      {
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
             
      }, vendorObj);
  }

    // key: rzp_live_7yWX2Du2GUqZvR'', 

  payWithRazor(pid,paymentAmount,razorpayOrderId,name,email,mobile,vendor_id) {
    let that = this;

    var options = {
      description: 'OFFKET Subscription',
      image: 'https://offket.com/uploads/noproduct.png',
      currency: 'INR',
      order_id: razorpayOrderId,
      key: 'rzp_live_7yWX2Du2GUqZvR',
      //key:'rzp_test_ywjRok0nPJdn2M',
      amount: parseFloat(paymentAmount) * 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'OFFKET',
      prefill: {
        email: email,
        contact: mobile,
        name: name
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('cancelled/closed');
        }
      }
    };

    let me = this;
    var successCallback = function (payment_id) {
      me.paymentSuccess(payment_id,razorpayOrderId,pid,paymentAmount,vendor_id);
    };

    var cancelCallback = function (error) {
      alert('Failed: ' + error.description);
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  } 

  paymentSuccess(payment_id,razorpayOrderId,pid,paymentAmount,vendor_id)
  {
       let vendorObj = {action:"successPayment",payment_id:payment_id,razorpayOrderId:razorpayOrderId,pid:pid,total_mount:paymentAmount,vendor_id:vendor_id};
        this.api.doRazerpayPayment((response: any) => {
                this.util.presentToast("Your package Subscribed Successfully", 'success', 'bottom', 2500);
                    this.router.navigate(['mypackage']);
        }, vendorObj);
  }
  ngOnInit() {
  }


  planlist(planlist){
  this.check=planlist.id;
  this.amount=planlist.amount;
      this.description=planlist.description;
  }
}
