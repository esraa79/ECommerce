import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CartService } from 'services/cart.service';
import { ProductsService } from 'services/products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  constructor(private activated:ActivatedRoute,private _product:ProductsService,private _cart:CartService,private toastr: ToastrService){}
   productdetails:any;
  ngOnInit():void{
   let id = this.activated.snapshot.params['productId']
  console.log(id)
   this._product.getProductDetails(id).subscribe({
    next:(response)=>{
      // console  
      console.log(response.data)
      this.productdetails=response.data;

    },
    error:()=>{

    }
   })
  }

  addtoCart(_id:string){
    
    this._cart.addToCart(_id).subscribe({
      next:(response) =>{
        console.log(response)
        this.toastr.success(response.message,'',{
          closeButton:true,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-left',
          timeOut:1000
        } );},
      error:(err)=>{console.log(err)}
    })
  }

}
