import { Component } from '@angular/core';
// import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
import { LoginClass } from 'src/app/customer/login/login.component';
import { MyadminserviceService } from 'src/app/myadminservice.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  name:string = "";
  password:string = ""
  constructor(private service:MyadminserviceService,private route:Router){}

  

  LoginSubmit(){
    console.log(this.name,this.password);
    const login = new LoginClass();
    login.email = this.name;
    login.password = this.password;

    this.service.AdminLogin(login).subscribe(response =>{
      console.log(response);
      if(response!=0){
        alert("Welcomee Admin!!");
        this.service.isAdminLoggedIn = 1;
        const arr = response.split("|")
        // this.service.customerId = arr[1];
        localStorage.setItem("atoken",arr[0]);
        this.route.navigate(['/admin'])

      }
      else{
        alert("wrong id or password");
      }

      
    },error =>{
      console.log(error);
        alert("Wrong Id or PassWord")
      
    })  
    
  }
}
