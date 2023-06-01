import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
// import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { LoginComponent } from './customer/login/login.component';
import { NavbarComponent } from './customer/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './customer/signup/signup.component';
import { TableComponent } from './customer/table/table.component';
import { MenuComponent } from './customer/menu/menu.component';
import { CartpageComponent } from './customer/cartpage/cartpage.component';
import { PaymentoflineComponent } from './customer/paymentofline/paymentofline.component';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { BillstatusComponent } from './customer/billstatus/billstatus.component';
import { MyprofileComponent } from './customer/myprofile/myprofile.component';
import { ChpasswordComponent } from './customer/chpassword/chpassword.component';
import { NavbaComponent } from './admin/navba/navba.component';
import { TablesComponent } from './admin/tables/tables.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { PendingdeliveriesComponent } from './admin/pendingdeliveries/pendingdeliveries.component';
import { MenuoptionComponent } from './admin/menuoption/menuoption.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerhomeComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    TableComponent,
    MenuComponent,
    CartpageComponent,
    PaymentoflineComponent,
    MyordersComponent,
    BillstatusComponent,
    MyprofileComponent,
    ChpasswordComponent,
    NavbaComponent,
    TablesComponent,
    AdminloginComponent,
    AdminsignupComponent,
    PendingdeliveriesComponent,
    MenuoptionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
