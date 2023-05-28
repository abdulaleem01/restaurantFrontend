import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogged!:number;
constructor(private service:MyserviceService,private route:Router){}

ngOnInit(){
this.isLogged=this.service.customerIsLogged;
}

LogOut(){
this.service.customerIsLogged = 0;
localStorage.clear();
this.route.navigate(['/login']);

}


}
