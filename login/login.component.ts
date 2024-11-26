import { Component } from '@angular/core';
import { IUser } from './login.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:IUser = { username:'',password:'',confirmPassword:'',email:'',mobileNumber:'',shopName:'',address:''};
  valid:boolean=true;
  
   
  //private userName=new Subject<string>();
  // private behavior_subject=new BehaviorSubject<string>("data");

  constructor(private router:Router,private loginService:LoginService){

  }

  validUser(userDetails:IUser){ 
    
      this.loginService.getUserDetails(userDetails).subscribe((data)=>{
        if(data != null)
          this.router.navigateByUrl('/product');
        else
            this.valid=false;
      });
     
      
    
  }

}
