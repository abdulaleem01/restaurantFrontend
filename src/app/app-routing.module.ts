import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './customer/login/login.component';
import { SignupComponent } from './customer/signup/signup.component';
import { TableComponent } from './customer/table/table.component';
import { MenuComponent } from './customer/menu/menu.component';
import { CartpageComponent } from './customer/cartpage/cartpage.component';
import { PaymentoflineComponent } from './customer/paymentofline/paymentofline.component';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { BillstatusComponent } from './customer/billstatus/billstatus.component';
import { MyprofileComponent } from './customer/myprofile/myprofile.component';

import { TablesComponent } from './admin/tables/tables.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { PendingdeliveriesComponent } from './admin/pendingdeliveries/pendingdeliveries.component';
import { MenuoptionComponent } from './admin/menuoption/menuoption.component';


import { AuthGuard } from './authguard.guard';


const routes: Routes = [
  {path:'',component:CustomerhomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'table/:id',component:TableComponent},
  {path:'menu',component:MenuComponent,canActivate:[AuthGuard]},
  {path:"cart",component:CartpageComponent,canActivate:[AuthGuard]},
  {path:'paymentoffline',component:PaymentoflineComponent,canActivate:[AuthGuard]},
  {path:'myorders',component:MyordersComponent,canActivate:[AuthGuard]},
  {path:'billstatus/:id',component:BillstatusComponent,canActivate:[AuthGuard]},
  {path:'myprofile',component:MyprofileComponent,canActivate:[AuthGuard]},

  // AdminRoutes
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminsignup',component:AdminsignupComponent,canActivate:[AuthGuard]},
  {path:'admin',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'admintables',component:TablesComponent,canActivate:[AuthGuard]},
  {path:'pendingDeliveries',component:PendingdeliveriesComponent,canActivate:[AuthGuard]},
  {path:'menuoption',component:MenuoptionComponent,canActivate:[AuthGuard]},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
