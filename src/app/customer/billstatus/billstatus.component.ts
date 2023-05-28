import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-billstatus',
  templateUrl: './billstatus.component.html',
  styleUrls: ['./billstatus.component.css']
})
export class BillstatusComponent {
  orderList:any;
  totalOrderAmount:any;
  tableNo:any;
  deliveryTime:any = 0;
  customerDetails:any;
  visitDetailss:any;
  visitid!:number;
  constructor(private route:ActivatedRoute,private service:MyserviceService,private route1:Router){}

  ngOnInit(){
    this.route.params.subscribe( params => {      
      console.log(params)
      this.visitid = params['id'];
      });

    // this.visitDetailss = this.service.visitDetails;
    // this.tableNo = this.service.tableNo;
    this.service.GetTotalAmountByVisit(this.visitid).subscribe(response =>{
      console.log(response);
      this.totalOrderAmount = response;
    })
  
    this.service.GetDishesByVisit(this.visitid).subscribe(response =>{
      console.log(response);
      this.orderList = response;
      for(let i=0; i<this.orderList.length; i++){
        if(this.deliveryTime<this.orderList[i].cookingTime){
         this.deliveryTime = this.orderList[i].cookingTime
        }
       }
    })

    this.service.GetCustomerDetails(this.service.customerId).subscribe(response =>{
      console.log(response);
      this.customerDetails = response;
    })

    this.service.GetVisitDetailsByID(this.visitid).subscribe(response=>{
      console.log(response);
      this.visitDetailss = response;
      this.tableNo = response.tableId;
    })
  }

  }


