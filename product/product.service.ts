import { Injectable, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './productdetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public ngOnInit(): void {
    
  }

  postProduct(product:IProduct) : IProduct{
     this.http.post('/api/addProduct',product).subscribe(()=>{
        //alert(product.productName+' Saved');
        return product;      
     });

     return product;

  }

  getAllProductData() : Observable<IProduct>{
   
    return this.http.get<IProduct>('/api/getAllProduct');
  }

  deleteProduct(productId:number) : boolean{
     this.http.delete('/api/deleteById/'+productId).subscribe(()=>{
          alert("Delete your product successfully !!!");
          //return true;
      });
     return true;
  }
}
