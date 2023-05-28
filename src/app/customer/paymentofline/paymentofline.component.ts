import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-paymentofline',
  templateUrl: './paymentofline.component.html',
  styleUrls: ['./paymentofline.component.css']
})
export class PaymentoflineComponent {
  orderList:any;
  totalOrderAmount:any;
  tableNo:any;
  deliveryTime:any = 0;
  customerDetails:any;
  visitDetailss:any;
  
  constructor(private service:MyserviceService){}
  
  ngOnInit(){
    // this.visitDetailss = this.service.visitDetails;
    this.tableNo = this.service.tableNo;
    this.service.GetTotalAmountByVisit(this.service.visitId).subscribe(response =>{
      console.log(response);
      this.totalOrderAmount = response;
    })
  
    this.service.GetDishesByVisit(this.service.visitId).subscribe(response =>{
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

    this.service.GetVisitDetailsByID(this.service.visitId).subscribe(response=>{
      console.log(response);
      this.visitDetailss = response;
    })
  }
}
