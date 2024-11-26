import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from './productdetails.model';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @ViewChild('deleteModal', { static: false })
  deleteModal!: ElementRef;

  btnText:string="Add Product";
  editValid:boolean=false;
  
  product:IProduct={productId:0,productName:'',quantity:0,unit:'select',originalPrice:0,marginPrice:0,gstNo:0};
  
  productDetails: any;
  id:number=0;
  productId:number=0;
  
  constructor(private productService:ProductService,private formBuilder:FormBuilder){
    
  }

  productForm = this.formBuilder.group({
    productName:'',quantity:0,unit:''
  });
  ngOnInit(){
    
    this.productService.getAllProductData().subscribe(products=>{
        this.productDetails=products;
        console.log(this.productDetails);
       
    });
  }

  addProduct(product:IProduct){
      this.productService.postProduct(product);
      this.product={productId:0,productName:'',quantity:0,unit:'select',originalPrice:0,marginPrice:0,gstNo:0};
      this.btnText="Add Product";
      if(this.editValid == false){
        this.productDetails.push(product);
      }
  }

  deleteProduct(){
    
    if(this.productService.deleteProduct(this.productId)){
        this.productDetails.splice(this.id,1);
        (this.deleteModal.nativeElement as HTMLElement).style.display='none';
        (document.querySelector('.modal-backdrop') as HTMLElement).style.display='none';

      }
      
  }

  deletePreProduct(id:number,productId:number){
    this.id=id; 
    this.productId=productId;   
    
  }

  editProduct(rowId:number,editPro:IProduct){
    this.product = editPro;
    this.editValid=true;
    this.btnText="Update";
    console.log("Edit Product Details");
  }


}
