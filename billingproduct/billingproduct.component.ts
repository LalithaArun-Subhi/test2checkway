import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../product/product.service';
import { IProduct } from '../product/productdetails.model';
import { BillingproductService } from './billingproduct.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-billingproduct',
  templateUrl: './billingproduct.component.html',
  styleUrls: ['./billingproduct.component.css']
})
export class BillingproductComponent{


  product:IProduct={productId:0,productName:'',quantity:0,unit:'',originalPrice:0,marginPrice:0,gstNo:0};
  products:any;
  total:number=0;
  productDetails: IProduct[] = [];
  quantityValid: boolean=true;
  availableQuantity:Number=0;
  todayDate = new Date();
  userShopName:any;

  constructor(private productService:ProductService,private billService:BillingproductService
              ,private loginService:LoginService){
    //todayDate = new Date();
    //loginService.userShopName.next("Hello");
    
    loginService.userShopName.subscribe((shop)=>{
      alert("Shop name urrr"+shop);
      this.userShopName=shop;
    })
  }

  ngOnInit(){
    
    this.productService.getAllProductData().subscribe(products=>{
      this.products=products;
      console.log("Load all products for Select Box:"+products);
    });
  }
  billProductData(billProduct:IProduct){
   if(billProduct.productId > 0){
    this.billService.getProductById(billProduct.productId).subscribe((originalProduct)=>{

      var originalQuantity = originalProduct.quantity;
      var billQuantity = billProduct.quantity;

      if(originalQuantity >= billQuantity){

          //Update quantity in Database
          originalProduct.quantity=originalQuantity - billQuantity;
          this.productService.postProduct(originalProduct);
          
          //Show details to the invoice report
          originalProduct.quantity=billQuantity;
          this.productDetails.push(originalProduct);

          this.product.productId=0;
          this.product.quantity=0;
          this.quantityValid=true;

          
      }else{
        this.product=originalProduct;
        this.quantityValid=false;
      }
     });
    }
  }
  changeProduct(changeProd:IProduct){
    
    this.availableQuantity=changeProd.quantity;
  }
  totalProduct(){
    this.total=0;
    for(let p of this.productDetails){
      this.total=this.total+this.addGst(p);
      console.log("Total price:"+this.total);
    }
    
  }

  addGst(p:IProduct):number{

    var gstPercentage = (p.quantity*p.marginPrice*p.gstNo)/100;
    var totalCost=(p.quantity*p.marginPrice)+gstPercentage;
    
    return totalCost;
  }

  billDelete(id: number,dltProduct:IProduct) {
   
    this.billService.getProductById(dltProduct.productId).subscribe((originalProduct)=>{
      originalProduct.quantity = dltProduct.quantity + originalProduct.quantity;
      this.productService.postProduct(originalProduct);

      this.productDetails.splice(id,1);
    });

  }

}
