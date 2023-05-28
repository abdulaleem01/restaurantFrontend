import { Component, ViewChild } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {

 visit:any;
constructor(private service:MyserviceService,private router:Router){}



ngOnInit(){
  this.service.GetAllVisitDetailsByCustomerId(this.service.customerId).subscribe(response =>{
    console.log(response);
    this.visit = response;
  })}

onClick(visitId:number){
  console.log(visitId);
  this.router.navigate([`/billstatus/${visitId}`])
}
}
