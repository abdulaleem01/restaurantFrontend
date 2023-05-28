import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
constructor(private service:MyserviceService){}



  customer:any;
  email:any;
  pass1:any;
  pass2:any;
  pass3:any;


  ngOnInit(){
    this.service.GetCustomerDetails(this.service.customerId).subscribe(response =>{
      console.log(response);
      this.customer = response;
    })
  }



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
