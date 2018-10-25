import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { CustServiceService } from '../../services/cust-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  services: Service[];
  constructor(private custServiceService:CustServiceService,
  private router:Router,private activatedRoute:ActivatedRoute) { 
  }

  
  ngOnInit() {
    {
      this.activatedRoute.queryParams.subscribe(
        (params) =>{
          let field = params['field'];
          let srchValue = params['srchValue'];
  
          console.log(field +":"+srchValue);
  
          if(field && srchValue){
            this.custServiceService.searchCustomers(field,srchValue).subscribe(
              (data) => this.services=data,
              (err)=>{this.services=undefined}
            );
          }else{
            this.custServiceService.getAllServices().subscribe(
              (data) => this.services=data,
              (err)=> {this.services=undefined}
            );
          }
        },
        (err)=>this.services=undefined
      );
      
    }

  }
  showAdd(title){
    //alert(empid);
    this.router.navigateByUrl("/add/"+title);

  }

}
