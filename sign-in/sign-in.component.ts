import { Component } from '@angular/core';
import { IUser } from '../login/login.model';
import { HttpClient } from '@angular/common/http';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  user:IUser = { username:'',password:'',confirmPassword:'',email:'',mobileNumber:'',shopName:'',address:''};

  constructor(private userSer:SigninService){

  }

  registerUser(user:IUser){
    this.userSer.saveUserData(user);
  }

}
