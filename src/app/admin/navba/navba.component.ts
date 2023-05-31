import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyadminserviceService } from 'src/app/myadminservice.service';


@Component({
  selector: 'app-navba',
  templateUrl: './navba.component.html',
  styleUrls: ['./navba.component.css']
})
export class NavbaComponent {
  isLoggged:number = 0;
  constructor(private route:Router,private service:MyadminserviceService){}

  ngOnInit(){
    this.isLoggged = this.service.isAdminLoggedIn;
  }

  LogOut(){
    console.log("logout");
    this.service.isAdminLoggedIn=0;
    // this.ngOnInit();
    localStorage.clear();
    this.route.navigate(['/adminlogin']);
  }
}
