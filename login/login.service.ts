import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from './login.model';
import { IsActiveMatchOptions } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   userShopName = new Subject();
   userDetails!:Observable<IUser>;
   
   constructor(private httpClient:HttpClient) { }

  

  getUserDetails(userInfo:IUser)  : Observable<IUser>{
    var url = "/api/validUser?UserName="+userInfo.username+"&&Password="+userInfo.password;
    this.userDetails=this.httpClient.get<IUser>(url);
    this.setShopName(this.userDetails);
    return this.userDetails;
  }

  setShopName(userDetails: Observable<IUser>) {
    
    userDetails.subscribe((userInfo)=>{
      if(userInfo != null)
        this.userShopName.next(userInfo.shopName);
    });
  }

}


