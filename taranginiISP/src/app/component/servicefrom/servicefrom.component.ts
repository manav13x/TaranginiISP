import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { Service } from '../../model/service';
import { CustServiceService } from '../../services/cust-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servicefrom',
  templateUrl: './servicefrom.component.html',
  styleUrls: ['./servicefrom.component.css']
})
export class ServicefromComponent implements OnInit {
  customer:Customer;
  plan:string;
  isEditing:boolean;
  constructor(
    private activatedRoute:ActivatedRoute,
    private custServiceService:CustServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.customer=new Customer();
    this.isEditing=true;

    this.activatedRoute.params.subscribe(
      (params)=>{
        let sTitle = params['title'];
        if(sTitle){
          this.customer.sPlan=sTitle;
          this.plan=sTitle;
        }
      }
    );
  }

  saveCustomer(){
      this.custServiceService.addCustomer(this.customer).subscribe(
        (data)=>{
          this.router.navigateByUrl("/view/"+data.cId);
        },
        (error)=>{alert("Something Went Wrong");}
      );
    }
  }

