import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String;
  field:string="charges";
  srchValue:string="";
  constructor(private router:Router){
    this.title="Tarangini ISP Provider";
}


doSearch(){
  this.router.navigate(["/"],{queryParams:{field:this.field,srchValue:this.srchValue}});
}

doChangeField(field,ele){
  this.field=field;
  this.srchValue="";
  switch(field){
    case 'maxusage': ele.placeholder="Max Usage";ele.type="text"; break;
    case 'netspeed': ele.placeholder="Net Speed"; ele.type="email";break;
    case 'charges': ele.placeholder="Charges"; ele.type="text";break;
  }
}
}
