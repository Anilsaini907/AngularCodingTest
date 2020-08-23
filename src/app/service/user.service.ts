import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
saleData:any[];
constructor(private httpclient : HttpClient) { } 

getuserdetail():Observable <any>{
return this.httpclient.get("https://jsonplaceholder.typicode.com/users")
  } 

 getPiedata(){
    return this.saleData =[
      { name: "Mobiles", value: 105000 },
     { name: "Laptop", value: 55000 },
      { name: "AC", value: 15000 },
      { name: "Headset", value: 150000 },
      { name: "Fridge", value: 20000 }
    ];
  }
}
