import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShopPopoverComponent } from "./modals/shop-popover/shop-popover.component";
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { StockManagementPage } from './stock-management/stock-management.page'; 
import { UpdatepricePage } from './updateprice/updateprice.page'; 
import { ForgotpasswordPage } from './forgotpassword/forgotpassword.page'; 
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Crop } from '@ionic-native/crop/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Network } from '@ionic-native/network/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { FilterPage } from './filter/filter.page';
import { BrandfilterPage } from './brandfilter/brandfilter.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
@NgModule({
  declarations: [AppComponent, ShopPopoverComponent,StockManagementPage,UpdatepricePage,ForgotpasswordPage,FilterPage,BrandfilterPage],
  entryComponents: [ShopPopoverComponent,StockManagementPage,UpdatepricePage,ForgotpasswordPage,FilterPage,BrandfilterPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,NgxIonicImageViewerModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    SocialSharing,
    ImagePicker,
    Crop,
    Network,
    OneSignal,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
