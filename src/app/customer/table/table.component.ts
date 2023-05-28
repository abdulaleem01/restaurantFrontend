import { AstVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private route:ActivatedRoute,private service:MyserviceService,private route1:Router){}

  ngOnInit(){
    this.route.params.subscribe( params => {      
      console.log(params)
      this.service.tableNo = params['id']
      console.log(this.service.tableNo);
      this.route1.navigate(['/login']);
    }

       );


  }
}
