import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnonymousguardService } from './services/anonymousguard.service';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [AnonymousguardService]
  },
  {
    path: 'categories/:shopId',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'shops',
    loadChildren: () => import('./shops/shops.module').then(m => m.ShopsPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'shopdetails/:shop_id',
    loadChildren: () => import('./shopdetails/shopdetails.module').then(m => m.ShopdetailsPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then(m => m.TermsPageModule)
  },
  {
    path: 'addproduct/:shop_id',
    loadChildren: () => import('./addproduct/addproduct.module').then(m => m.AddproductPageModule)
  },
  {
    path: 'orderdetails',
    loadChildren: () => import('./orderdetails/orderdetails.module').then(m => m.OrderdetailsPageModule)
  },
  {
    path: 'vendor-dashboard/:shopId',
    loadChildren: () => import('./vendor-dashboard/vendor-dashboard.module').then(m => m.VendorDashboardPageModule),
     canActivate: [AuthguardGuard]
  },
  {
    path: 'vm-dashboard/:vmId',
    loadChildren: () => import('./vm-dashboard/vm-dashboard.module').then(m => m.VmDashboardPageModule)
  },
  {
    path: 'shop-profile/:shopId',
    loadChildren: () => import('./shop-profile/shop-profile.module').then(m => m.ShopProfilePageModule)
  },
  {
    path: 'request-new-product/:shopId/:catId',
    loadChildren: () => import('./request-new-product/request-new-product.module').then(m => m.RequestNewProductPageModule)
  },
  {
    path: 'payouts-commission',
    loadChildren: () => import('./payouts-commission/payouts-commission.module').then( m => m.PayoutsCommissionPageModule)
  },
  {
    path: 'vendor-profile/:shopId',
    loadChildren: () => import('./vendor-profile/vendor-profile.module').then( m => m.VendorProfilePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'editproduct',
    loadChildren: () => import('./editproduct/editproduct.module').then( m => m.EditproductPageModule)
  },
  {
    path: 'productdetails',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  },
  {
    path: 'addvariant',
    loadChildren: () => import('./addvariant/addvariant.module').then( m => m.AddvariantPageModule)
  },
  {
    path: 'linkproducts',
    loadChildren: () => import('./linkproducts/linkproducts.module').then( m => m.LinkproductsPageModule)
  },
  {
    path: 'stock-management',
    loadChildren: () => import('./stock-management/stock-management.module').then( m => m.StockManagementPageModule)
  },
  {
    path: 'productimages',
    loadChildren: () => import('./productimages/productimages.module').then( m => m.ProductimagesPageModule)
  },
  {
    path: 'updateprice',
    loadChildren: () => import('./updateprice/updateprice.module').then( m => m.UpdatepricePageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'businesshours',
    loadChildren: () => import('./businesshours/businesshours.module').then( m => m.BusinesshoursPageModule)
  },
  {
    path: 'userreviews',
    loadChildren: () => import('./userreviews/userreviews.module').then( m => m.UserreviewsPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'shareapp',
    loadChildren: () => import('./shareapp/shareapp.module').then( m => m.ShareappPageModule)
  },
  {
    path: 'vendorreviews',
    loadChildren: () => import('./vendorreviews/vendorreviews.module').then( m => m.VendorreviewsPageModule)
  },
  {
    path: 'exchange',
    loadChildren: () => import('./exchange/exchange.module').then( m => m.ExchangePageModule)
  },
  {
    path: 'vm-editprofile',
    loadChildren: () => import('./vm-editprofile/vm-editprofile.module').then( m => m.VmEditprofilePageModule)
  },
  {
    path: 'requestpayment',
    loadChildren: () => import('./requestpayment/requestpayment.module').then( m => m.RequestpaymentPageModule)
  },
  {
    path: 'addrequestpayment',
    loadChildren: () => import('./addrequestpayment/addrequestpayment.module').then( m => m.AddrequestpaymentPageModule)
  },
  {
    path: 'bid-list',
    loadChildren: () => import('./bid-list/bid-list.module').then( m => m.BidListPageModule)
  },
  {
    path: 'offer-banners',
    loadChildren: () => import('./offer-banners/offer-banners.module').then( m => m.OfferBannersPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./coupons/coupons.module').then( m => m.CouponsPageModule)
  },
  {
    path: 'create-coupons',
    loadChildren: () => import('./create-coupons/create-coupons.module').then( m => m.CreateCouponsPageModule)
  },
  {
    path: 'bid-product',
    loadChildren: () => import('./bid-product/bid-product.module').then( m => m.BidProductPageModule)
  },
  {
    path: 'create-banners',
    loadChildren: () => import('./create-banners/create-banners.module').then( m => m.CreateBannersPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'confirmregister',
    loadChildren: () => import('./confirmregister/confirmregister.module').then( m => m.ConfirmregisterPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'nointernet-page',
    loadChildren: () => import('./nointernet-page/nointernet-page.module').then( m => m.NointernetPagePageModule)
  },
  {
    path: 'selectdelivery-boy',
    loadChildren: () => import('./selectdelivery-boy/selectdelivery-boy.module').then( m => m.SelectdeliveryBoyPageModule)
  },
  {
    path: 'plans',
    loadChildren: () => import('./plans/plans.module').then( m => m.PlansPageModule)
  },
  {
    path: 'subscriptions',
    loadChildren: () => import('./subscriptions/subscriptions.module').then( m => m.SubscriptionsPageModule)
  },
  {
    path: 'mypackage',
    loadChildren: () => import('./mypackage/mypackage.module').then( m => m.MypackagePageModule)
  },
  {
    path: 'existingproduct',
    loadChildren: () => import('./existingproduct/existingproduct.module').then( m => m.ExistingproductPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'addoffers',
    loadChildren: () => import('./addoffers/addoffers.module').then( m => m.AddoffersPageModule)
  },
  {
    path: 'existingoffers',
    loadChildren: () => import('./existingoffers/existingoffers.module').then( m => m.ExistingoffersPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'updateversion',
    loadChildren: () => import('./updateversion/updateversion.module').then( m => m.UpdateversionPageModule)
  },
  {
    path: 'subcategories',
    loadChildren: () => import('./subcategories/subcategories.module').then( m => m.SubcategoriesPageModule)
  },
  {
    path: 'clone-subcategories',
    loadChildren: () => import('./clone-subcategories/clone-subcategories.module').then( m => m.CloneSubcategoriesPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'clone-categorieslist',
    loadChildren: () => import('./clone-categorieslist/clone-categorieslist.module').then( m => m.CloneCategorieslistPageModule)
  },
  {
    path: 'brandfilter',
    loadChildren: () => import('./brandfilter/brandfilter.module').then( m => m.BrandfilterPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
