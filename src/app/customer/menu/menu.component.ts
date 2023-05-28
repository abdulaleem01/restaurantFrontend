import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  cartValues:any = new Map();
  AllDishes:any;
  


  constructor( private service:MyserviceService,private route:Router){};
  cartQuantityIndicator!:number;

  ngOnInit(){

    this.service.GetDishes().subscribe(response =>{
      console.log(response);
      this.AllDishes = response;
    })

    const visit = new VisitDetails();
    visit.customerId = this.service.customerId;
    visit.tableId = this.service.tableNo;
    visit.date = new Date().toLocaleDateString().split('T')[0]


    visit.time = new Date().toLocaleTimeString();
    visit.deliveryStatus = 0;
    visit.paymentStatus = 0;

    console.log(visit)

    let TotalCartNum:number=0;
    for(let [keys,values] of this.service.NewOrderMap){
      TotalCartNum += values;
    }
    this.cartQuantityIndicator = TotalCartNum;

    // add at last
    this.service.AddVisit(visit).subscribe(response =>{
      console.log(response);
      this.service.visitDetails = response;
     this.service.visitId =  response.visitId;
     console.log(this.service.visitId);

    })
    //

}



OnClickAdd(DishId:number){
  const orders = new Order();
  // orders.visitId = this.service.visitId;
  orders.visitId = 1;
  orders.dishId = DishId;
  this.service.OrderList.push(orders)
  console.log(this.service.OrderList[1]);
  this.cartValues.set(1,1)
  console.log(this.cartValues);
  console.log(this.service.OrderList.length);
  // this.cartQuantityIndicator = this.service.OrderList.length;

  // Adding to service dish  map
  this.service.NewOrderMap.set(DishId,1);
  // this.cartQuantityIndicator = this.service.NewOrderMap.size;

  let TotalCartNum:number=0;
for(let [keys,values] of this.service.NewOrderMap){
  TotalCartNum += values;
}
this.cartQuantityIndicator = TotalCartNum;

}

CheckForAddedOnce(DishId:number):boolean{
if((this.service.NewOrderMap.has(DishId)) && this.service.NewOrderMap.get(DishId) != 0){
  return true;
}
else{
  return false
}
}

onClickAdd(DishId:number){
this.cartValues.set(DishId,this.cartValues.get(1)+1);
console.log(this.cartValues);
this.service.NewOrderMap.set(DishId,this.service.NewOrderMap.get(DishId)+1);
// this.cartQuantityIndicator = this.service.NewOrderMap.size;
let TotalCartNum:number=0;
for(let [keys,values] of this.service.NewOrderMap){
  TotalCartNum += values;
}
this.cartQuantityIndicator = TotalCartNum;
}

onClickMinus(DishId:number){
  this.cartValues.set(DishId,this.cartValues.get(1)-1);
console.log(this.cartValues);
this.service.NewOrderMap.set(DishId,this.service.NewOrderMap.get(DishId)-1);
// this.cartQuantityIndicator = this.service.NewOrderMap.size;

let TotalCartNum:number=0;
for(let [keys,values] of this.service.NewOrderMap){
  TotalCartNum += values;
}
this.cartQuantityIndicator = TotalCartNum;
}

DishesExistInCard(DishId:number):number{
  
  return this.service.NewOrderMap.get(DishId);

}

onClickCart(){
  const orderSubmit:Array<Order> = [];

  for(let [keys,values] of this.service.NewOrderMap){
    for(let step = 0; step < values; step++){
        const orde = new Order();
        orde.dishId = keys;
        orde.visitId = this.service.visitId;
        orderSubmit.push(orde);
    }
}
console.log(orderSubmit);

this.service.AddMultipleOrders(orderSubmit).subscribe(response =>{
  console.log(response);
  if(response == 1){
    this.route.navigate(["/cart"]);
  }
  else{
    alert('We Are facing some issues, Try again later');
  }
},error =>{
  alert('We Are facing some issues, Try again later');

});


// this.route.navigate(["/cart"]);
}
}



export class Dishes{
  dishId!:number;
  name!:string;
  description!:string;
  price!:number;
  imageUrl!:string;
  cookingTime!:number;
}


export class VisitDetails{
  customerId!:number;
  tableId!: number;
  date!:string
  time!:string;
  deliveryStatus!:number;
  paymentStatus!:number;
}
// "visitId": 0,
//     "dishId": 0
export class Order{
  visitId!:number;
  dishId!:number;
}

export class Cart{
  DishId!:number;
  Quantity!:number;
}