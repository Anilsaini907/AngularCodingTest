import { Component, OnInit } from '@angular/core';
import{ UserService } from '../service/user.service'
import {User} from '../UserModel/User'
import { NgxSpinnerService } from "ngx-spinner";
import { fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private user: UserService ,private SpinnerService: NgxSpinnerService) { }
users:User[];
  ngOnInit(){
    this.SpinnerService.show(); 
    //setTimeout (() => {
      fromEvent(document,'click')
    .pipe(switchMap(()=>this.user.getuserdetail()))
    .subscribe(
        data=>{this.users=data;
  this.SpinnerService.hide();  
        });
      //}, 3000);

  }

}
