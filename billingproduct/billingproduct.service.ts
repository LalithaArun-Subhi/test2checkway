import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../product/productdetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingproductService {

  constructor(private http:HttpClient) { }

  getProductById(productId : Number) : Observable<IProduct>{
      return this.http.get<IProduct>("api/getProductById/"+productId);
  }
  
}
