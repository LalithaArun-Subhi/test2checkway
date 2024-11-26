import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { BillingproductComponent } from './billingproduct/billingproduct.component';
import {NgxPrintModule} from 'ngx-print';
import { CamelCasePipe } from './camel-case.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    BillingproductComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    NgxPrintModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
