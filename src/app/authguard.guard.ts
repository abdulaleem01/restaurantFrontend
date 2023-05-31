import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { Router,Route } from '@angular/router';
import { MyadminserviceService } from './myadminservice.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public myauth:MyserviceService,private route:Router , private myadmin:MyadminserviceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const { routeConfig } = route; 
   
   const { path } = routeConfig as Route; 

  //  if (path?.includes('adminhome') && this.myauth.authour==='admin.com' ) {
 
  //     return true;
  //   }

    if ((path?.includes('menu') || path?.includes('cart') || path?.includes('paymentoffline')|| path?.includes('myorders')|| path?.includes('myprofile')||path?.includes('billstatus/:id')) && this.myauth.customerIsLogged===1 ) {
 
      return true;
    }
    if (path?.includes('admin') || path?.includes('admintables') || path?.includes('pendingDeliveries')|| path?.includes('adminsignup')) {
      
      if(this.myadmin.isAdminLoggedIn === 1){
        return true;
      }
      else{
        this.route.navigateByUrl('/adminlogin'); 
        return false;
      }
    }

    

    // if (path?.includes('nursehome') && this.myauth.authour==='nurse.com' ) {
 
    //   return true;
    // }
    this.route.navigateByUrl('/login'); 
    return false;
  }
  
}

// {path:'admin',component:HomeComponent},
// {path:'login',component:LoginComponent},
// {path:'signup',component:SignupComponent},
// {path:'table/:id',component:TableComponent},
// {path:'menu',component:MenuComponent},
// {path:"cart",component:CartpageComponent},
// {path:'paymentoffline',component:PaymentoflineComponent},
// {path:'myorders',component:MyordersComponent},
// {path:'billstatus/:id',component:BillstatusComponent},
// {path:'myprofile',component:MyprofileComponent},
