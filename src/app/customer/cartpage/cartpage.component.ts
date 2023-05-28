import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
orderList:any;
totalOrderAmount:any;
tableNo:any;
deliveryTime:any = 0;

constructor(private service:MyserviceService,private router:Router){}

ngOnInit(){
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
}

onRemove(orderId:number){
  console.log(orderId);
  this.service.DeleteOrder(orderId).subscribe(response =>{
    console.log(response);
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cart']);
    })
  })
 
}

onBook(){
  console.log(this.service.visitId);
  this.service.UpdateDeliveryStatusByVisitId(this.service.visitId,1).subscribe(response =>{
    console.log(response);
    this.service.UpdatePaymentStatusByVisitId(this.service.visitId,1).subscribe(response =>{
      console.log(response);
      this.router.navigate(['/paymentoffline']);

    })
  })
  
  }



}
