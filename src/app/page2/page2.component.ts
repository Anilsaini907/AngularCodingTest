import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
 view:any;
 saleData =[
  { name: "Mobiles", value: 105000 },
  { name: "Laptop", value: 55000 },
  { name: "AC", value: 15000 },
  { name: "Headset", value: 150000 },
  { name: "Fridge", value: 20000 }
];
  constructor(private user: UserService) {

   }
  ngOnInit(){
    
  }
  onResize(event) {
    this.view= [event.target.innerWidth / 1.35, 400];
}


}
