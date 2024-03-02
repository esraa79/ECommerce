import { products } from 'interfaces/products';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from 'services/auth.service';
import { CartService } from 'services/cart.service';


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit{

  constructor(private _cart:CartService,private _auth:AuthService){}

  userId!:string;
  orderlist:any[]=[]
  productlist:any[]=[]
  ngOnInit(): void {
    
    this.getAllOrder()
  }
  getAllOrder(){

    let encodeToken:any=localStorage.getItem('userToken')
    let decodeToken:any = jwtDecode(encodeToken);
    this.userId = decodeToken.id;
  
    
    this._cart.getOrders(this.userId).subscribe({
      next:(resp) => {
        console.log(resp);
        
        this.orderlist=resp
        // this.productlist = resp.cartItems
        //  console.log(resp..cartItems[0].product)
      },
      error:(err)=>{
        console.log(err)
      }
      
    })
  }
}
