import { Component } from '@angular/core';
import { MyadminserviceService } from 'src/app/myadminservice.service';
import { Observable, Subscriber,interval} from 'rxjs';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';



@Component({
  selector: 'app-pendingdeliveries',
  templateUrl: './pendingdeliveries.component.html',
  styleUrls: ['./pendingdeliveries.component.css'],
})
export class PendingdeliveriesComponent {

  checkValue:any =null;
  // sub:any = Subscriber;
  details:any;

constructor(private service:MyadminserviceService,private route:Router,private myservice:MyserviceService){}
ngOnInit(){
  this.service.CheckVisitStatusChanges().subscribe(response =>{
    console.log(response);
    this.checkValue = response;
  })

  console.log("reloaded")

  this.service.GetDeliveryDetailsByDEliveryStatus().subscribe(response =>{
    console.log(response);
    this.details = response;
  })


  interval(5000).subscribe(x => {
    this.service.CheckVisitStatusChanges().subscribe(response =>{
      console.log(response);
      if(this.checkValue < response && this.checkValue != null){

        this.checkValue = response;
        this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.route.navigate(['/pendingDeliveries']);})
        // location.reload();
        console.log("Triggered")
        // this.checkValue = response;
        // 
      }
      // this.checkValue = response;
    })
});
}

OnDone(visitIdd:number){
  console.log(visitIdd);
  this.myservice.UpdateDeliveryStatusByVisitId(visitIdd,2).subscribe(response =>{
    console.log(response);
    this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.route.navigate(['/pendingDeliveries']);})
  })
}




}
