import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { LoginClass } from './customer/login/login.component';
import { Menu } from './admin/menuoption/menuoption.component';

@Injectable({
  providedIn: 'root'
})
export class MyadminserviceService {

  isAdminLoggedIn:number = 0;


  domainUrl:string="https://abdulbackendrestaurant.azurewebsites.net/api";


  // domainUrl:string = "https://localhost:7145/api";

  constructor(private http:HttpClient) {}

  public AdminLogin(logindetails:LoginClass):Observable<any>{

    const url = `${this.domainUrl}/Admin/Login`;
    return this.http.post(url,logindetails,{responseType:'text'});
  }

  public ViewAllTables():Observable<any>{

    const token = localStorage.getItem('atoken');
    const header = {'Authorization':`Bearer ${token}`};
    const url = `${this.domainUrl}/Admin/ViewAllTable`;
    return this.http.get<any>(url,{headers:header});
  }

  public AddTable(tableN:number,descriptio:string):Observable<any>{
    const token = localStorage.getItem('atoken');
    const header = {'Authorization':`Bearer ${token}`};
    const url = `${this.domainUrl}/Admin/AddTable`;
    return this.http.post<any>(url,{tableNo:tableN,description:descriptio},{headers:header});
    
  }

  public DeleteTable(tableN:number):Observable<any>{
    const token = localStorage.getItem('atoken');
    const header = {'Authorization':`Bearer ${token}`};
    const url = `${this.domainUrl}/Admin/DeleteTable/${tableN}`;
    return this.http.delete<any>(url,{headers:header});

  }

  public CheckVisitStatusChanges():Observable<any>{
    const token = localStorage.getItem('atoken');
    const header = {'Authorization':`Bearer ${token}`};
    const url = `${this.domainUrl}/Admin/CheckVisitStatusChanges`;
    return this.http.get<any>(url,{headers:header});
}
// GetDeliveryDetailsByDEliveryStatus/1
public GetDeliveryDetailsByDEliveryStatus():Observable<any>{
  const token = localStorage.getItem('atoken');
  const header = {'Authorization':`Bearer ${token}`};
  const url = `${this.domainUrl}/Admin/GetDeliveryDetailsByDEliveryStatus/1`;
  return this.http.get<any>(url,{headers:header});
}

public GetAllDishes():Observable<any>{
  const token = localStorage.getItem('atoken');
  const header = {'Authorization':`Bearer ${token}`};
  const url = `${this.domainUrl}/Admin/GetAllDishes`;
  return this.http.get<any>(url,{headers:header});
}

public DeleteDish(dishId:number):Observable<any>{
  const token = localStorage.getItem('atoken');
  const header = {'Authorization':`Bearer ${token}`};
  const url = `${this.domainUrl}/Admin/DeleteDish/${dishId}`;
  return this.http.delete<any>(url,{headers:header});
  
}

public AddDish(men:Menu):Observable<any>{
  const token = localStorage.getItem('atoken');
  const header = {'Authorization':`Bearer ${token}`};
  const url = `${this.domainUrl}/Admin/AddDishes`;
  return this.http.post<any>(url,men,{headers:header});
  
}

public AddDishImage(img:any):Observable<any>{
  const token = localStorage.getItem('atoken');
  const header = {'Authorization':`Bearer ${token}`};
  const url = `${this.domainUrl}/Admin/AddDishPicture`;
  return this.http.post<any>(url,img,{headers:header});
}

  


  
  

}
