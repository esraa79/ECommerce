import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

 
  cartNumber=new BehaviorSubject(0)
  
  baseUrl='https://ecommerce.routemisr.com';
  header?:any={ 
    token:localStorage.getItem('userToken')
  }
 
  

  constructor(private _http:HttpClient) { 
    this.getItemsinCart().subscribe({
      next:(response)=>{
     
        console.log(this.cartNumber);
        this.cartNumber.next(response.numOfCartItems)
       
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
    }

    //cart 
   addToCart(id:any):Observable<any>{
 
    return this._http.post(`${this.baseUrl}/api/v1/cart`,
    {productId:id},

    {headers:this.header})
   }

   getItemsinCart():Observable<any>{
      //  console.log('getItemsinCart');
       
    return this._http.get(`${this.baseUrl}/api/v1/cart`,

    {headers:this.header})
   }

   updateCart(count:number,id:string):Observable<any>{
    return this._http.put(`${this.baseUrl}/api/v1/cart/${id}`,
    {count:count},
    {headers:this.header}
    )
   }

   deleteCart(id:string):Observable<any>{
    return this._http.delete(`${this.baseUrl}/api/v1/cart/${id}`,
   
    {headers:this.header}
    )
   }

   //payment

   checkOut(id:string,formData:any):Observable<any>{
    return this._http.post(`${this.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
   {shippingAddress:formData},
    {headers:this.header}
    )

   }

   //get user orders
   getOrders(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/orders/user/${id}`)

   }


}
