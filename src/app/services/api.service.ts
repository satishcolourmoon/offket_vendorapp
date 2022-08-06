import { Injectable } from '@angular/core';
import * as environment from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavController, ModalController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl = 'https://offket.com/api/Vendor_api/user';

  public versionCode = '';
  public headers = new HttpHeaders();
  constructor(private httpClient: HttpClient) {
    this.headers.set('Content-Type', 'application/x-www-form-urlencoded');

  }

  doLoginUser(callback, loginObject,token) {
    const payload = new HttpParams()
      .set('action', loginObject.action)
      .set('mobile', loginObject.user_name)
      .set('password', loginObject.password)
      .set('token', token)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchDashboardDetails(callback) {
    let vm_id = localStorage.getItem('vm_id');
    const payload = new HttpParams()
      .set('vm_id', vm_id)
    // call post end point
    return this.httpClient.post(
      this.baseUrl + 'dashboardDetails',
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }
  
  fetchPlans(callback, vmObj) {
    const payload = new HttpParams()
      .set('action', vmObj.action)
      .set('shopId', vmObj.shopId)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchSubscription(callback, vmObj) {
    const payload = new HttpParams()
      .set('action', vmObj.action)
      .set('pid', vmObj.pid)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchShopLists(callback, vmObj) {
    // let vm_id = localStorage.getItem('vm_id');
    const payload = new HttpParams()
      .set('action', vmObj.action)
      .set('user_id', vmObj.user_id)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchBanners(callback, vmObj) {
    const payload = new HttpParams()
      .set('action', vmObj.action)
      .set('vendor_id', vmObj.vendor_id)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchVendorRequests(callback, vmObj) {
    const payload = new HttpParams()
      .set('action', vmObj.action)
      .set('vendor_id', vmObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchShopDetails(callback, dashboardObj) {
    const payload = new HttpParams()
      .set('action', dashboardObj.action)
      .set('login_status', dashboardObj.login_status)
      .set('user_id', dashboardObj.shopId)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchShopDetails1(callback, profObj) {
    const payload = new HttpParams()
      .set('action', profObj.action)
      .set('user_id', profObj.shopId)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }
  
   getvmDetails(callback, dashboardObj) {
    const payload = new HttpParams()
      .set('action', dashboardObj.action)
      .set('login_status', dashboardObj.login_status)
      .set('user_id', dashboardObj.shopId)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }
  fetchShopCategories(callback, catObj) {
    const payload = new HttpParams()
    .set('action', catObj.action)
    .set('user_id', catObj.user_id)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  getCategories(callback, catObj) {
    const payload = new HttpParams()
    .set('action', catObj.action)
    .set('user_id', catObj.user_id)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchShopSubCategories(callback, subcatObj) {
    const payload = new HttpParams()
    .set('action', subcatObj.action)
      .set('cat_id', subcatObj.catId)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchbasicsubcategories(callback, subcatObj) {
    const payload = new HttpParams()
    .set('action', subcatObj.action)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


  fetchProducts(callback, productObj) {
    const payload = new HttpParams()
    .set('action', productObj.action)
      .set('cat_id', productObj.cat_id)
      .set('subcat_id', productObj.subcat_id)
      .set('shop_id', productObj.shop_id)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  getTags(callback, tagObj) {
    const payload = new HttpParams()
    .set('action', tagObj.action)
    // call post end point
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  getBrands(callback, brandObj) {
    const payload = new HttpParams()
    .set('action', brandObj.action)
    .set('subcatid', brandObj.subcatid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  getTypes(callback, brandObj) {
    const payload = new HttpParams()
    .set('action', brandObj.action)
    .set('subcatid', brandObj.subcatid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  getTax(callback, taxObj) {
    const payload = new HttpParams()
    .set('action', taxObj.action)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  getProductData(callback, editProdObj) 
  {
    const payload = new HttpParams()
    .set('action', editProdObj.action)
    .set('pid', editProdObj.pid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }




  requestProduct(callback, requestProd) {
    const payload = new HttpParams()
    .set('action', requestProd.action)
    .set('shop_id', requestProd.shop_id)
    .set('name', requestProd.name)
    .set('cat_id', requestProd.cat_id)
    .set('sub_cat_id', requestProd.sub_cat_id)
    .set('key_features', requestProd.key_features)
    .set('description', requestProd.description)
    .set('product_tags', requestProd.product_tags)
    .set('brand', requestProd.brand)
    .set('variant_product', requestProd.variant_product)
    .set('manage_stock', requestProd.manage_stock)
    .set('product_status', requestProd.product_status)
    .set('price', requestProd.price)
    .set('saleprice', requestProd.saleprice)
    .set('stock', requestProd.stock)
    .set('availabile_stock_status', requestProd.availabile_stock_status)
    .set('imagepath', requestProd.imagepath)
    .set('offers', requestProd.offers)
    .set('price_range', requestProd.price_range)
    .set('type', requestProd.type)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


   updateProduct(callback, requestProd) 
   {
    const payload = new HttpParams()
    
    
    .set('action', requestProd.action)
    .set('pid', requestProd.pid)
    .set('offers', requestProd.offers)
    .set('availabile_stock_status', requestProd.availabile_stock_status)
    .set('product_status', requestProd.product_status)
    .set('price_range', requestProd.price_range)
    .set('return_available', requestProd.return_available)
    .set('no_of_days', requestProd.no_of_days)
    
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }



  fetchAttributeTypes(callback, attributeTypeObj) 
  {
    const payload = new HttpParams()
    .set('action', attributeTypeObj.action)
    .set('product_id', attributeTypeObj.pid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchgetAttributeValues(callback, attributeValueObj) 
  {
    const payload = new HttpParams()
    .set('action', attributeValueObj.action)
    .set('product_id', attributeValueObj.pid)
    .set('attribute_type_id', attributeValueObj.att_types)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  addVariants(callback, variantObj) 
  {
    const payload = new HttpParams()
    .set('action', variantObj.action)
    .set('product_id', variantObj.pid)
    .set('attribute_type_id', variantObj.att_types)
    .set('attribute_value_ids', variantObj.attrib_value)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  updateVariants(callback, updvariantObj) 
  {
    const payload = new HttpParams()
    .set('action', updvariantObj.action)
    .set('product_id', updvariantObj.pid)
    .set('attribute_type_id', updvariantObj.att_types)
    .set('attribute_value_ids', updvariantObj.attrib_value)
    .set('vid', updvariantObj.vid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchVariantsList(callback, variantObj) 
  {
    const payload = new HttpParams()
    .set('action', variantObj.action)
    .set('product_id', variantObj.pid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  deleteselVariants(callback, delvarObj) 
  {
    const payload = new HttpParams()
    .set('action', delvarObj.action)
    .set('product_id', delvarObj.pid)
    .set('vid', delvarObj.vid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchLinkVariants(callback, linkvariantsObj) 
  {
    const payload = new HttpParams()
        .set('action', linkvariantsObj.action)
        .set('product_id', linkvariantsObj.pid)
        return this.httpClient.post(
          this.baseUrl,
          payload,
          { headers: this.headers }
        ).subscribe((response: Response) => {
          callback(response);
    });
  }

  fetchLinkVariants1(callback, linkvariantsObj) 
  {
    const payload = new HttpParams()
    .set('action', linkvariantsObj.action)
    .set('product_id', linkvariantsObj.pid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  updateStock(callback, stockObj) 
  {
    const payload = new HttpParams()
    .set('action', stockObj.action)
    .set('product_id', stockObj.product_id)
    .set('variant_id', stockObj.variant_id)
    .set('quantity', stockObj.quantity)
    .set('stockstatus', stockObj.stockstatus)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  updatPrices(callback, updatpricesObj) 
  {
    const payload = new HttpParams()
    .set('action', updatpricesObj.action)
    .set('product_id', updatpricesObj.product_id)
    .set('variant_id', updatpricesObj.variant_id)
    .set('price', updatpricesObj.price)
    .set('saleprice', updatpricesObj.saleprice)
    .set('stock', updatpricesObj.stock)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  changeStatus(callback, changeStatusObj) 
  {
    const payload = new HttpParams()
    .set('action', changeStatusObj.action)
    .set('vid', changeStatusObj.vid)
    .set('status', changeStatusObj.status)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  getImages(callback, imagesObj) 
  {
    const payload = new HttpParams()
    .set('action', imagesObj.action)
    .set('product_id', imagesObj.product_id)
    .set('variant_id', imagesObj.variant_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  changePassword(callback, passwordObj) 
  {
    const payload = new HttpParams()
    .set('action', passwordObj.action)
    .set('login_type', passwordObj.login_type)
    .set('user_id', passwordObj.user_id)
    .set('current_password', passwordObj.current_password)
    .set('new_password', passwordObj.new_password)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }
 
 fetchTerms(callback, passwordObj) 
  {
    const payload = new HttpParams()
    .set('action', passwordObj.action)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchOrderslist(callback, orderObj) 
  {
    const payload = new HttpParams()
    .set('action', orderObj.action)
    .set('vendor_id', orderObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchPendingsettlelist(callback, settlementObj) 
  {
    const payload = new HttpParams()
    .set('action', settlementObj.action)
    .set('vendor_id', settlementObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchCompletedsettlelist(callback, com_settlementObj) 
  {
    const payload = new HttpParams()
    .set('action', com_settlementObj.action)
    .set('vendor_id', com_settlementObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchOrderdetails(callback, orderdetObj) 
  {
    const payload = new HttpParams()
    .set('action', orderdetObj.action)
    .set('oid', orderdetObj.oid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  getMarchantData(callback,profileObj) 
  {
    const payload = new HttpParams()
    .set('action', profileObj.action)
    .set('vm_id', profileObj.vm_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  forgotPassword(callback, forgotObj) 
  {
    const payload = new HttpParams()
    .set('action', forgotObj.action)
    .set('phone', forgotObj.phone)
    .set('user_type', forgotObj.user_type)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  updatevmProfile(callback, vmObj) 
  {
    const payload = new HttpParams()
    .set('action', vmObj.action)
    .set('vm_id', vmObj.vm_id)
    .set('name', vmObj.name)
    .set('address', vmObj.address)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  checkresetPassword(callback, resetObj) 
  {
    const payload = new HttpParams()
    .set('action', resetObj.action)
    .set('otp', resetObj.otp)
    .set('user_type', resetObj.user_type)
    .set('password', resetObj.password)
    .set('phone', resetObj.phone)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchStockManagement(callback, stockObj) 
  {
    const payload = new HttpParams()
    .set('action', stockObj.action)
    .set('variant_id', stockObj.variant_id)
    .set('pid', stockObj.pid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchDashboard(callback, dashObj) 
  {
    const payload = new HttpParams()
    .set('action', dashObj.action)
    .set('vm_id', dashObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchVendorStatus(callback, vendorObj) 
  {
    const payload = new HttpParams()
    .set('action', vendorObj.action)
    .set('vendor_id', vendorObj.shopId)
    .set('tokenId', vendorObj.tokenId)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  changeVendorStatus(callback, statObj) 
  {
    const payload = new HttpParams()
    .set('action', statObj.action)
    .set('vendor_id', statObj.shopId)
    .set('status', statObj.status)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  fetchBusinessHours(callback, busiObj) 
  {
    const payload = new HttpParams()
    .set('action', busiObj.action)
    .set('vendor_id', busiObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  createBusinessHours(callback, workObj) 
  {
    const payload = new HttpParams()
    .set('action', workObj.action)
    .set('vendor_id', workObj.vendor_id)
    .set('open_time', workObj.open_time)
    .set('closed_time', workObj.closed_time)
    .set('weekname', workObj.weekname)
    .set('working', workObj.working)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  updateBusinessHours(callback, workObj) 
  {
    const payload = new HttpParams()
    .set('action', workObj.action)
    .set('vendor_id', workObj.vendor_id)
    .set('open_time', workObj.open_time)
    .set('closed_time', workObj.closed_time)
    .set('weekname', workObj.weekname)
    .set('working', workObj.working)
    .set('wid', workObj.wid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  doacceptOrder(callback, aObj) 
  {

    const payload = new HttpParams()
    .set('action', aObj.action)
    .set('vendor_id', aObj.vendor_id)
    .set('order_id', aObj.orderid)
    .set('delivery_type', aObj.delivery_type)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

 docancelOrder(callback, caObj) 
 {
    const payload = new HttpParams()
    .set('action', caObj.action)
    .set('vendor_id', caObj.vendor_id)
    .set('order_id', caObj.orderid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  getVendorData(callback, profileObj) 
 {
    const payload = new HttpParams()
    .set('action', profileObj.action)
    .set('vendor_id', profileObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  doupdateProfiledetails(callback, editObj) 
 {
    const payload = new HttpParams()
    .set('action', editObj.action)
    .set('vendor_id', editObj.vendor_id)
    .set('shop_name', editObj.shop_name)
    .set('owner_name', editObj.owner_name)
    .set('description', editObj.description)
    .set('address', editObj.address)
    .set('alternative_mobile', editObj.alternative_mobile)
    .set('pan', editObj.pan)
    .set('aadhar', editObj.aadhar)
    .set('gst_number', editObj.gst_number)
    .set('bankname', editObj.bankname)
    .set('accountholder_name', editObj.accountholder_name)
    .set('bank_ifsccode', editObj.bank_ifsccode)
    .set('account_no', editObj.account_no)
    .set('min_order_amount', editObj.min_order_amount)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  deleteProducts(callback, delProdObj) 
 {
    const payload = new HttpParams()
    .set('action', delProdObj.action)
    .set('pid', delProdObj.pid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchReviews(callback, reviewObj) 
 {
    const payload = new HttpParams()
    .set('action', reviewObj.action)
    .set('vendor_id', reviewObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchSalesReport(callback, salesObj) 
 {
    const payload = new HttpParams()
    .set('action', salesObj.action)
    .set('vendor_id', salesObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }
  getDatewisesalesReport(callback, reportObj) 
 {
    const payload = new HttpParams()
    .set('action', reportObj.action)
    .set('vendor_id', reportObj.vendor_id)
    .set('sdate', reportObj.sdate)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  deleteBussHours(callback, delObj) 
 {
    const payload = new HttpParams()
    .set('action', delObj.action)
    .set('vendor_id', delObj.vendor_id)
    .set('bid', delObj.bid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchexchange_orders(callback, exorderObj) 
 {
    const payload = new HttpParams()
    .set('action', exorderObj.action)
    .set('vendor_id', exorderObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  acceptExchangeorders(callback, exorderObj) 
 {
    const payload = new HttpParams()
    .set('action', exorderObj.action)
    .set('oid', exorderObj.oid)
    .set('sid', exorderObj.session_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  fetchRequestAmount(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  doVendorPayments(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('requested_amount', reqObj.requested_amount)
    .set('description', reqObj.description)
    .set('total_payment', reqObj.total_payment)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchBidslist(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('bid_status', reqObj.bid_status)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchBidDetails(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('bid', reqObj.bid)
    .set('vendor_id', reqObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  addQuote(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('bid_id', reqObj.bid_id)
    .set('vendor_id', reqObj.vendor_id)
    .set('total_price', reqObj.total_price)
    .set('user_id', reqObj.user_id)
    
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchCouponCodes(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  clearRequest(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('id', reqObj.id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  addCouponCodes(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('coupon_code', reqObj.coupon_code)
    .set('percentage', reqObj.percentage)
    .set('maximum_amount', reqObj.maximum_amount)
    .set('start_date', reqObj.start_date)
    .set('end_date', reqObj.end_date)
    .set('description', reqObj.description)
     .set('minimum_order_amount', reqObj.minimum_order_amount)
      .set('utilization', reqObj.utilization)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  addBannerdata(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('title', reqObj.title)
    .set('imagepath', reqObj.imagepath)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  addOffer(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('title', reqObj.title)
    .set('cat_id', reqObj.cat_id)
    .set('start_date', reqObj.start_date)
    .set('end_date', reqObj.end_date)
    .set('imagepath', reqObj.imagepath)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

 updateCouponCodes(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('coupon_code', reqObj.coupon_code)
    .set('percentage', reqObj.percentage)
    .set('maximum_amount', reqObj.maximum_amount)
    .set('start_date', reqObj.start_date)
    .set('end_date', reqObj.end_date)
    .set('description', reqObj.description)
    .set('id', reqObj.id)
    .set('minimum_order_amount', reqObj.minimum_order_amount)
      .set('utilization', reqObj.utilization)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  deleteCoupon(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('cid', reqObj.cid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }
   deleteBanner(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('cid', reqObj.cid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }


  updateBannerdata(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('title', reqObj.title)
    .set('imagepath', reqObj.imagepath)
    .set('id', reqObj.id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }

  updateOfferdata(callback, reqObj) 
 {
    const payload = new HttpParams()
    .set('action', reqObj.action)
    .set('vendor_id', reqObj.vendor_id)
    .set('title', reqObj.title)
    .set('imagepath', reqObj.imagepath)
    .set('id', reqObj.id)
    .set('cat_id', reqObj.cat_id)
    .set('start_date', reqObj.start_date)
    .set('end_date', reqObj.end_date)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    ).subscribe((response: Response) => {
        callback(response);
      });
  }



  dosignup(callback,loginObject,tokenId) {
     const payload = new HttpParams()
      .set('action', loginObject.action)
      .set('name', loginObject.name)
      .set('email', loginObject.email)
      .set('password', loginObject.password)
      .set('phone', loginObject.mobile)
      .set('gst', loginObject.gst)
      .set('token', tokenId)
      .set('rcode', loginObject.rcode)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  otpVerification(callback,otpOb) {
     const payload = new HttpParams()
      .set('action', otpOb.action)
      .set('user_id', otpOb.user_id)
      .set('otp', otpOb.otp)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  resendOTP(callback,otpOb) {
     const payload = new HttpParams()
      .set('action', otpOb.action)
      .set('user_id', otpOb.user_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  searchProducts(callback,otpOb) {
     const payload = new HttpParams()
      .set('action', otpOb.action)
      .set('keyword', otpOb.keyword)
      .set('shopId', otpOb.shopId)
      
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


   completetheuserOrder(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
      .set('orderid', obj.orderid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  generateRazerpay(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('grand_total', obj.grand_total)
      .set('vendor_id', obj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  doRazerpayPayment(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('payment_id', obj.payment_id)
      .set('razorpayOrderId', obj.razorpayOrderId)
      .set('pid', obj.pid)
      .set('total_mount', obj.total_mount)
      .set('vendor_id', obj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  getPackageReport(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  confirmPickup(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
      .set('orderid', obj.orderid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  
  generateUserOTP(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
      .set('orderid', obj.orderid)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  confirmDelivery(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
      .set('orderid', obj.orderid)
      .set('otp', obj.otp)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  myPackages(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


  getShopSubCategories(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('shopId', obj.shopId)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  getShopSubCategorieswithCat(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('shopId', obj.shopId)
      .set('catId', obj.catId)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


  fetchexistingProducts(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('subcat_id', obj.subcat_id)
      .set('shop_id', obj.shop_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  
   fetchexistingOffers(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('cat_id', obj.cat_id)
      .set('shop_id', obj.shop_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


  cloneNewProduct(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('pid', obj.pid)
      .set('shopId', obj.shopId)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  cloneNewOffer(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('pid', obj.pid)
      .set('shopId', obj.shopId)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

fetchOffers(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  fetchShopOffercategories(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('shopId', obj.shopId)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


  fetchSupport(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


  updateVersion(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  searchCloneProducts(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('keyword', obj.keyword)
      .set('subcat_id', obj.subcat_id)
      .set('shop_id', obj.shop_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


searchProductsList(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('keyword', obj.keyword)
      .set('cat_id', obj.cat_id)
      .set('subcat_id', obj.subcat_id)
      .set('shop_id', obj.shop_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  vendorCurrentPackage(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('vendor_id', obj.vendor_id)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  productsBrandFilters(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('shopId', obj.shopId)
      .set('catId', obj.catId)
      .set('subcat_id', obj.subcat_id)
      .set('json_data', obj.json_data)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }

  productscloneBrandFilters(callback,obj) {
     const payload = new HttpParams()
      .set('action', obj.action)
      .set('shopId', obj.shopId)
      .set('catId', obj.catId)
      .set('subcat_id', obj.subcat_id)
      .set('json_data', obj.json_data)
    return this.httpClient.post(
      this.baseUrl,
      payload,
      { headers: this.headers }
    )
      .subscribe((response: Response) => {
        callback(response);
      });
  }


}
