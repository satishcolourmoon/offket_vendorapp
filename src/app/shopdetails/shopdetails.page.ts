import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { ShopPopoverComponent } from "../modals/shop-popover/shop-popover.component";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.page.html',
  styleUrls: ['./shopdetails.page.scss'],
})
export class ShopdetailsPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;

  public shopDetail = {};
  public shopId;
  public currentSegment = 'products';
  public products = [];
  public orders = [];

  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController) {

    this.products = [
      { 'name': 'Women Maxi Blue Dress', 'price': '1999', 'categories': 'Clothing, Dresses', 'image': 'https://rukminim1.flixcart.com/image/800/960/k3ahbww0/dress/c/g/4/l-gn2013-l-dev-fashion-original-imafgnnhm4zkqwcz.jpeg' },
      { 'name': 'Sweater with embroidery', 'price': '1299', 'categories': 'Kids Baby Boy', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579251957NMH1zbu645.png' },
      { 'name': 'Zip-up sweatshirt with bands', 'price': '2499', 'categories': 'Kids, Baby Boy', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579252292F2K8LVoBNc.png' },
      { 'name': 'Allover print dress', 'price': '999', 'categories': 'Kids, Baby Girl', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579252720pYLwQPOGHC.png' },
      { 'name': 'UA Play Up', 'price': '1499', 'categories': 'Women, Bottom Wears', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579261735BOECgXqPYA.png' },
      { 'name': 'Women\u2019s Leggings', 'price': '599', 'categories': 'Women, Bottom Wears', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1594124756i4aqMMq0lB.png' },
      { 'name': 'Long Sleeve Shirt', 'price': '2999', 'categories': 'Men, T-shirts', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579257223uKvLXHm7m4.png' },
      { 'name': 'Nike-Air-Zoom-Pegasus', 'price': '1999', 'categories': 'Men, Shoes', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579260619VMs4fuRLvn.png' },
      { 'name': 'Men Synthetic Casual Boot', 'price': '899', 'categories': 'Men, Shoes', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_1579256337GxFbefCCZQ.png' },
      { 'name': 'Boys Shorts', 'price': '1699', 'categories': 'Men, Bottoms', 'image': 'https://mediacity.co.in/emart/demo/public/variantimages/thumbnails/variant_15792550523wo2u93cMg.png' },
    ]
    this.orders = [
      {
        'order_id': '981234',
        'order_date': '19-08-2020',
        'payment_type': 'Cash on delivery',
        'payment_status': 'Paid',
        'order_status': 'Pending',
        'amount': 1299
      },
      {
        'order_id': '981235',
        'order_date': '21-08-2020',
        'payment_type': 'Online',
        'payment_status': 'Paid',
        'order_status': 'Pending',
        'amount': 499
      },
      {
        'order_id': '981236',
        'order_date': '21-08-2020',
        'payment_type': 'Cash on delivery',
        'payment_status': 'Unpaid',
        'order_status': 'Pending',
        'amount': 3999
      },
      {
        'order_id': '981237',
        'order_date': '21-08-2020',
        'payment_type': 'Online',
        'payment_status': 'Paid',
        'order_status': 'Pending',
        'amount': 2500
      },
      {
        'order_id': '981238',
        'order_date': '22-08-2020',
        'payment_type': 'Online',
        'payment_status': 'Paid',
        'order_status': 'Pending',
        'amount': 1800
      },
      {
        'order_id': '981249',
        'order_date': '22-08-2020',
        'payment_type': 'Online',
        'payment_status': 'Paid',
        'order_status': 'Pending',
        'amount': 6500
      }
    ]

    this.shopId = this.actRoute.snapshot.params.shop_id;
    this.getshopDetails();
  }

  ngOnInit() {

  }

  segmentChanged(event) {
    this.currentSegment = event.target.value;
    setTimeout(() => {
      this.content.scrollToTop(0)
    }, 200);

  }


  getshopDetails() {
    this.util.showLoader();
    this.api.fetchShopDetails((response: any) => {
      setTimeout(() => {
        this.util.hideLoader();
      }, 1000);
      if (response.status == 'valid') {
        this.shopDetail = response.data;
      } else if (response.status == 'invalid_form') {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      } else {
        this.util.presentToast(response.message, 'danger', 'bottom', 2500);
      }
    }, this.shopId);
  }

  addproduct() {
    this.router.navigate(['/addproduct', this.shopId]);
  }
  viewOrderDetails(orderId) {
    this.router.navigate(['/orderdetails', orderId]);
  }


}
