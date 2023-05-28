import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginClass } from './customer/login/login.component';
import { Signup } from './customer/signup/signup.component';
import { VisitDetails } from './customer/menu/menu.component';
import { Order } from './customer/menu/menu.component';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  domainUrl:string="https://abdulbackendrestaurant.azurewebsites.net/api";
  customerId!:number;
  tableNo!:number;
  visitId!:number;
  visitDetails!:any;
  customerDetails:any;

  customerIsLogged:number = 0;

  OrderList = new Array<Order>;
  NewOrderMap = new Map();



  





  constructor(private http:HttpClient) {}
  //  public PutAcceptancebyId(id:Number,Acceptance:Number):Observable<any>{
  //   const url = `https://52.172.14.117/api/Appointment/updatebyAppointMentNo/${id}/${Acceptance}`;
  //   return this.http.put<any>(url,null);
    
  public CustomerLogin(log:LoginClass):Observable<any>{
    // const headers = {responseType:'text'};
    const url = `${this.domainUrl}/Customer/CustomerLogin`;
    return this.http.post(url,log,{responseType:'text'});
    };

    public CustomerSignUp(signup:Signup):Observable<any>{
      const url = `${this.domainUrl}/Customer/CustomerSignUp`;
      return this.http.post<any>(url,signup);
    }

    public GetCustomerDetails(userId:number):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/CustomerById/${userId}`;
      return this.http.get<any>(url,{headers:headers});
    }

    public GetDishes():Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/AvailableDishes`;
      return this.http.get<any>(url,{headers:headers});
    }

    public AddVisit(visit:VisitDetails):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/AddVisit`;
      return this.http.post<any>(url,visit,{headers:headers});
    }

    public AddMultipleOrders(orders:Array<Order>){
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/AddMultipleOrders`;
      return this.http.post<any>(url,orders,{headers:headers});
    }

    public GetDishesByVisit(visitId:number):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/GetDishInfoByVisitId/${visitId}`;
      return this.http.get<any>(url,{headers:headers});
    }

    public GetTotalAmountByVisit(visitId:number):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/TotalOrderAmmount/${visitId}`;
      return this.http.get<any>(url,{headers:headers});
    }

    public DeleteOrder(orderId:number):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/DeleteOrderById/${orderId}`;
      return this.http.delete<any>(url,{headers:headers});
    }
    public GetVisitDetailsByID(visitId:number):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/GetVisitById/${visitId}`;
      return this.http.get<any>(url,{headers:headers});
    }

    public UpdateDeliveryStatusByVisitId(visitId:number,status:number):Observable<any>{
      // const auth_token = localStorage.getItem('ctoken'); 
      // const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/UpdateDeliveryStatus/${visitId}/${status}`;
      // return this.http.put<any>(url,{headers:headers},{ withCredentials: true });
      return this.http.put<any>(url,null);
    }

    public UpdatePaymentStatusByVisitId(visitId:number,status:number):Observable<any>{
      // const auth_token = localStorage.getItem('ctoken'); 
      // const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/UpdatePaymentStatus/${visitId}/${status}`;
      // return this.http.put<any>(url,{headers:headers},{ withCredentials: true });
      return this.http.put<any>(url,null);
    }

    // public UpdatePaymentStatusByVisitId(visitId:number,status:number){
    //   const auth_token = localStorage.getItem('ctoken'); 
    //   const headers = {'Authorization':`Bearer ${auth_token}`};
    //   const url = `${this.domainUrl}/Customer/UpdatePaymentStatus/${visitId}/${status}`;
    //   return this.http.put<any>(url,{headers:headers},{ withCredentials: true });
    // }
    public GetAllVisitDetailsByCustomerId(CustomerId:number):Observable<any>{
      const auth_token = localStorage.getItem('ctoken'); 
      const headers = {'Authorization':`Bearer ${auth_token}`};
      const url = `${this.domainUrl}/Customer/GetAllVisitDetailsByCustomerId/${this.customerId}`;
      return this.http.get<any>(url,{headers:headers});
    }

    public ChangePassword(email:string,opass:string,npass:string):Observable<any>{
      const email1:string = email.replace('@','%40');
      const opass1:string = opass.replace('@','%40');
      const npass1:string = npass.replace('@','%40');
      const url = `${this.domainUrl}/Customer/UpdatePassword/${email1}/${opass1}/${npass1}`;
      return this.http.post<any>(url,null);
    }

}
