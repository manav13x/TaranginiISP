import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions ,Headers} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Service} from '../model/service'
import { Customer } from '../model/customer';
@Injectable({
  providedIn: 'root'
})
//rxjs stands for reactjs
export class CustServiceService {
//angular has to make a call to restful in spring
//a request made from localhost to localhost is called cross-origin
//will not be processed for security
//make spring allow cross origin request
baseUrl:string;
constructor(private http:Http) {
  this.baseUrl="http://localhost:7997/customers";
 }

 getIdIncludedBaseUrl(cId):string{
  return this.baseUrl+"/"+cId;
}

getSearchUrl(field: string, value: string): string {
  return this.baseUrl + "/" + field + "/" + value;
}
 //Observable is an asynchronous call
 getJsonContentTypeHeader() : RequestOptions{ 
  const headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return new RequestOptions({ headers: headers });
 }

 getAllServices():Observable<Service[]>{//conversion of data string to json
   return this.http.get(this.baseUrl).pipe(
    map((data)=>data.json())
  );
 }

addCustomer(customer:Customer):Observable<Customer>{
let url = this.baseUrl;
let content = JSON.stringify(customer);
let headers = this.getJsonContentTypeHeader();

return this.http.post(url,content,headers).pipe(
 map(data=>data.json())
);

}

 getCustomer(cId):Observable<Customer>{//conversion of data string to json
  return this.http.get(this.getIdIncludedBaseUrl(cId)).pipe(
   map((data)=>data.json())
 );
}
searchCustomers(field: string, value: string): Observable<Service[]> {
  return this.http.get(this.getSearchUrl(field,value)).pipe(
    map(data => data.json())
  );
}

}
