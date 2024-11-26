import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../login/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient,private router:Router) { }


  saveUserData(user:IUser){
    this.http.post('/api/saveUserData',user).subscribe(()=>{
      alert("User details was saved sucessfully !!!");
      this.router.navigateByUrl('/login');
    });
  }
}
