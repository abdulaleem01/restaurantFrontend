import { Component } from '@angular/core';
import { MyadminserviceService } from 'src/app/myadminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuoption',
  templateUrl: './menuoption.component.html',
  styleUrls: ['./menuoption.component.css']
})

export class MenuoptionComponent {




  name:string = ''
  description:string = ''
  price :number = 0
  imageurl!:File;
  cookingtime:number= 0;


  dishes:any;


  constructor(private service:MyadminserviceService,private route:Router){}
ngOnInit(){

  this.service.GetAllDishes().subscribe(response =>{
    console.log(response);
    this.dishes = response;
  })
}

onFileChanged(event:any){
this.imageurl  = event.target.files[0];
console.log(this.imageurl)
}



onAdd(){

  // this.imageurl.na
  try{
  const  im = this.imageurl.name;
  const im1 = im.split('.');
  if(this.name!='' ||this.description!='' ||this.price!=0 ||this.cookingtime!=0 || this.imageurl != undefined ){

    if(im1[1]== 'jpg' ||im1[1]== 'JPG' ||im1[1]== 'jpeg' ||im1[1]== 'JPEG'){
    const dish = new Menu();
    dish.name = this.name;
    dish.description = this.description;
    dish.price = this.price;
    dish.imageUrl = this.imageurl.name;
    dish.cookingTime = this.cookingtime;
console.log(dish);


const uploadData = new FormData();
uploadData.set("formFile",this.imageurl,this.imageurl.name);
console.log(uploadData);



    this.service.AddDishImage(uploadData).subscribe(response =>{
      console.log(response);
      this.service.AddDish(dish).subscribe(esponse =>{
        console.log(esponse);
        this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.route.navigate(['/menuoption']);})
        
      })
    })


  }
  else{
    alert("JPG and JPEG are only allowed formats");
  }

  }
  else{
    alert("Please Give all the inputs for Adding Dishes")
  }

  }catch
  {
    alert("Fill All Details")
  }
  
}

onRemove(dishId:number){

  this.service.DeleteDish(dishId).subscribe(response =>{

    console.log(response);
    this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.route.navigate(['/menuoption']);})
  })

}

// onad(){
//   console.log(this.imageurl.name);
//   // const img = new FormData();
//   // img.append()
// }

}

export class Menu{
  name!:string;
  description!:string;
  price!:number;
  imageUrl!:string;
  cookingTime!:number;
}

// "dishId": 12,
// "name": "Chicken masala",
// "description": "Chicken fried rice is a popular Asian dish that combines cooked rice, diced chicken, vegetables, and seasonings, all stir-fried in a hot wok or skillet. The chicken is tender and flavorful, while the rice absorbs the savory flavors. This quick and satisfying meal is often enjoyed as a standalone dish or as a side with other Asian delicacies.",
// "price": 160,
// "imageUrl": "kdkdkd.kp",
// "cookingTime": 10