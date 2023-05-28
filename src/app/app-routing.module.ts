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
import { AuthGuard } from './authguard.guard';


const routes: Routes = [
  {path:'',component:CustomerhomeComponent},
  {path:'admin',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'table/:id',component:TableComponent},
  {path:'menu',component:MenuComponent,canActivate:[AuthGuard]},
  {path:"cart",component:CartpageComponent,canActivate:[AuthGuard]},
  {path:'paymentoffline',component:PaymentoflineComponent,canActivate:[AuthGuard]},
  {path:'myorders',component:MyordersComponent,canActivate:[AuthGuard]},
  {path:'billstatus/:id',component:BillstatusComponent,canActivate:[AuthGuard]},
  {path:'myprofile',component:MyprofileComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
