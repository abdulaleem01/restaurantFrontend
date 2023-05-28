import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name:string = "";
  password:string = ""
  constructor(private service:MyserviceService,private route:Router){}

  LoginSubmit(){
    console.log(this.name,this.password);
    const login = new LoginClass();
    login.email = this.name;
    login.password = this.password;

    this.service.CustomerLogin(login).subscribe(response =>{
      console.log(response);
      if(response!=0){
        alert("Welcomee!!");
        this.service.customerIsLogged = 1;
        const arr = response.split("|")
        this.service.customerId = arr[1];
        localStorage.setItem("ctoken",arr[0]);
        this.route.navigate(['/menu'])

      }
      else{
        alert("wrong id or password");
      }

      
    })  
    
  }

  email:any;
  pass1:any;
  pass2:any;
  pass3:any;

  changePass(){

    if( this.pass3 == this.pass2){
    this.service.ChangePassword(this.email,this.pass1,this.pass2).subscribe(response=>{
      console.log(response);
      if(response == 1){
        alert("successfully changed password");
      }
      else{
        alert("wrong old pass word");
      }
    },error =>{
      console.log(error);
      alert('Wrong Mail Address or Wrong old Password')
    })
  }
  else{
    alert(' New Passwords are not matching');
  }
  }

}

export class LoginClass{
  email!:string;
  password!:string;
}
