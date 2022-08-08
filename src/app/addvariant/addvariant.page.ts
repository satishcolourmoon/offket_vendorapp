import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { PopoverController } from '@ionic/angular';
import { IonContent, ModalController, Platform, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-addvariant',
  templateUrl: './addvariant.page.html',
  styleUrls: ['./addvariant.page.scss'],
})
export class AddvariantPage implements OnInit {
  pid: any;
  attr_types: any;
  attrib_value: any;
  att_types: any;
  attr_values: any;
  variant_list: any;
  createvariant_status: any;
  updateariant_status: any;
  edit_att_types: any;
  edit_attrib_value: any;
  vid: any;
  page:any;
  userId:any;
  add_variant=true;
  constructor(private util: UtilService, private actRoute: ActivatedRoute,
    private router: Router, private api: ApiService, public popoverController: PopoverController, public alertController: AlertController,private loadingCtrl: LoadingController) {
    this.createvariant_status = false;
    this.updateariant_status = false;
  }

  ngOnInit() {
    this.pid = this.actRoute.snapshot.paramMap.get('pid');
    this.page = this.actRoute.snapshot.paramMap.get('page');
    this.userId = localStorage.getItem('fash_user_id');
    this.getAttributTypes(this.pid);

    this.getVariantsList();

  }
  async getAttributTypes(pid) {
    let attributeTypeObj = { action: "getAttributeTypes", pid: this.pid };
    this.attr_types = [];
        let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchAttributeTypes((response: any) => {
        loading.dismiss();
        if (response.status == true) {
          this.attr_types = response.attribute_types;
          //this.nval=true;
        }
        else {
          //this.nval=false;
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, attributeTypeObj);
  }

  async getAttrValues() {
  this.attrib_value='';
    let attributeValueObj = { action: "getAttributeValues", pid: this.pid, att_types: this.att_types };
    this.attr_values = [];
      let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
    this.api.fetchgetAttributeValues((response: any) => {
      loading.dismiss();
        if (response.status == true) {
          this.attr_values = response.attribute_values;
          //this.nval=true;
        }
        else {
          //this.nval=false;
          //this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, attributeValueObj);
  }
 async createVariants() {
      if(this.att_types==undefined || this.att_types=="")
      {
          this.util.presentToast("Select Attribute Type", 'danger', 'top', 2500);
      }
      else if(this.attrib_value==undefined || this.attrib_value=="")
      {
         this.util.presentToast("Select Attribute Values", 'danger', 'top', 2500);
      }
      else
      {
            let variantObj = { action: "addvariant", pid: this.pid, att_types: this.att_types, attrib_value: this.attrib_value };
            let loading = await this.loadingCtrl.create({
                    spinner:'circles',
                    message: 'Please wait',
                  });
                  loading.present();
            this.api.addVariants((response: any) => {
              loading.dismiss();
                this.util.hideLoader();
                if (response.status == true) {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  this.getVariantsList();

                  this.createvariant_status = false;
                  this.updateariant_status = false;
                  this.add_variant=true;
                }
                else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }

            }, variantObj);
    }
  }



  async getVariantsList() {
    let variantsObj = { action: "getaddvariantList", pid: this.pid };
    this.variant_list = [];
    let loading = await this.loadingCtrl.create({
                  spinner:'circles',
                  message: 'Please wait',
                });
                loading.present();
    this.api.fetchVariantsList((response: any) => {
        loading.dismiss();
        if (response.status == true) {
          this.variant_list = response.variant_list;
          //this.nval=true;
        }
        else {
          //this.nval=false;
          this.util.presentToast(response.message, 'danger', 'bottom', 2500);
        }

    }, variantsObj);
  }

  editVariant(vid, vattr_type_id, vattr_value_ids) {
    this.vid = vid;
    this.add_variant=false;

    setTimeout(() => {

    //this.edit_attrib_value=vattr_value_ids;
    var str = vattr_value_ids;
    this.edit_attrib_value = str.split(",");
    this.edit_att_types = vattr_type_id;

    this.createvariant_status = false;
    this.updateariant_status = true;

    this.getAttributTypes(this.pid);

    this.att_types = vattr_type_id;
    this.getAttrValues();

     }, 500);
  }


  async updateVariants() {
      /*if(this.edit_att_types==undefined || this.edit_att_types=="")
      {
          this.util.presentToast("Select Attribute Type", 'danger', 'top', 2500);
      }
      else if(this.edit_attrib_value==undefined || this.attrib_value=="")
      {
         this.util.presentToast("Select Attribute Values", 'danger', 'top', 2500);
      }
      else
      { */

            let updvariantObj = { action: "updatevariant", pid: this.pid, att_types: this.edit_att_types, attrib_value: this.edit_attrib_value, vid: this.vid };
            let loading = await this.loadingCtrl.create({
                  spinner:'circles',
                  message: 'Please wait',
                });
                loading.present();
            this.api.updateVariants((response: any) => {
                loading.dismiss();
                if (response.status == true) {
                  this.util.presentToast(response.message, 'danger', 'top', 2500);
                  this.createvariant_status = false;
                  this.updateariant_status = false;
                  this.add_variant=true;
                  this.getVariantsList();
                }
                else {
                  //this.nval=false;
                  this.util.presentToast(response.message, 'danger', 'top', 2500);
                }

            }, updvariantObj);
    //}
  }

  async deleteVariant(vid) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this variant',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            let delvarObj = { action: "delete_variant", pid: this.pid, vid: vid };
            
            this.api.deleteselVariants((response: any) => {
                //loading.dismiss();
                if (response.status == true) {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                  this.getVariantsList();
                }
                else {
                  this.util.presentToast(response.message, 'danger', 'bottom', 2500);
                }

            }, delvarObj);
          }
        }
      ]
    });

    await alert.present();



  }

  addVariant() {
    this.createvariant_status = true;
    this.updateariant_status = false;
    this.add_variant=false;
  }

  goProducts() {
    this.router.navigate(['linkproducts', { pid: this.pid }]);
  }

}
