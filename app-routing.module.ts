import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BillingproductComponent } from './billingproduct/billingproduct.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'signin',component:SignInComponent,title:"Register New User"},
  {path:'login',component:LoginComponent,title:"Login User"},
  {path:'home',component:HomeComponent,title:"Home"},
  {path:'product',component:ProductComponent,title:"StoreProduct Information"},
  {path:'bill',component:BillingproductComponent,title:"Billing Product"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
