import { products } from 'interfaces/products';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'services/cart.service';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  constructor(private _cart:CartService,private toastr: ToastrService){}

  isloading:boolean=true
  cartItems!:any;
// productList:any[]=[];
  ngOnInit(){
    this.getMyCart()
  }

  getMyCart(){
 
    
    this._cart.getItemsinCart().subscribe({
      next:(resp)=>
      {
       
       
        this.cartItems=resp.data;  
        this.isloading=false;
     
      },
       error:(err)=>console.log(err)
    })
  }

  updateMyCart(count:number,id:string){
    if(count==0)
    {
      this.DeleteFromMyCart(id)
    }
    else{
  
      this._cart.updateCart(count,id).subscribe({
        next:(resp) =>{
         
          this.cartItems=resp.data;
          // this._cart.cartNumber.next(resp.data.numOfCartItems)
        },
        error:(err) =>{
          console.log(err)
        }
      
      })
    }
  
   
  }
  DeleteFromMyCart(id:string){
    this._cart.deleteCart(id).subscribe({
      next:(resp) =>{
       
        this.cartItems=resp.data;
        console.log(resp.data.products.length)
        this._cart.cartNumber.next(resp.data.products.length)
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }

}
 