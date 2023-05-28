import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:MyserviceService, private route:Router){}

   name!:string;
   email!:string;
   phonenumber!:string;
   password!:string;

   LoginSubmit(){
    const signup = new Signup();
    signup.name = this.name;
    signup.email = this.email;
    signup.phonenumber = this.phonenumber;
    signup.password = this.password;
    this.service.CustomerSignUp(signup).subscribe(response =>{
      console.log(response);
      alert("user created Successfully!!");
      this.route.navigate(["/login"]);
      
    })

   }
}

export class Signup{
  name!:string;
  email!:string;
  phonenumber!:string;
  password!:string;
};
