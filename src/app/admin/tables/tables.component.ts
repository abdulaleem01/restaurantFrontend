import { Component } from '@angular/core';
import { MyadminserviceService } from 'src/app/myadminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  tables:any;
  myRoute:any;

  tableno:any;
  tableDescrip:any;
  constructor(private service:MyadminserviceService,private route:Router){}

  ngOnInit(){
    this.service.ViewAllTables().subscribe(response =>{
      console.log(response);
      this.tables = response;
    })
    this.myRoute = `https://${location.hostname}/table/`
    console.log(this.myRoute);
  }

  addTable(){

    if(this.tableno != null && this.tableDescrip != null){
      this.service.AddTable(this.tableno,this.tableDescrip).subscribe(response =>{
        console.log(response);
        this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.route.navigate(['/admintables']);})
      
      })
    }
    else{
      alert("Please fill the Table No and Description");
    }
   
  }
  

  deleteTable(tableid:number){

    this.service.DeleteTable(tableid).subscribe(response =>{
      console.log(response);
      this.route.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.route.navigate(['/admintables']);})

    })
    // console.log(tableid);
  }


}
