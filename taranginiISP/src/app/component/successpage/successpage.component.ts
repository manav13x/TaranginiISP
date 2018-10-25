import { Component, OnInit } from '@angular/core';
import { CustServiceService } from '../../services/cust-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent implements OnInit {

  cust:Customer;
  date:string;
  constructor(private custServiceService:CustServiceService,
              private activatedRoute:ActivatedRoute,
              private router:Router
  ) {
    this.cust = new Customer();
    this.date=((new Date().getDate()+4)+"/"+new Date().getMonth()+"/"+new Date().getFullYear()).toString();
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        let cIId = params['cId']
        //console.log(empid+"hello")
        this.custServiceService.getCustomer(cIId).subscribe(
          (data) => this.cust=data
        );
      }
    );
  }


}
