import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishNumber=new BehaviorSubject(0)
  
  constructor(private _http:HttpClient) { 
    this.getItemsinWish().subscribe({
      next:(response)=>{
     
        
        this.wishNumber.next(response.data.length)
        // console.log(this.cartNumber);
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  baseUrl='https://ecommerce.routemisr.com';
  header?:any={ 
    token:localStorage.getItem('userToken')
  }

  addToWish(id:any):Observable<any>{
 

    return this._http.post(`${this.baseUrl}/api/v1/wishlist`,
    {productId:id},

    {headers:this.header})
   }
  

 deletefromWish(id:any):Observable<any>{
 

    return this._http.delete(`${this.baseUrl}/api/v1/wishlist/${id}`,
   

    {headers:this.header})
   }


  getItemsinWish():Observable<any>{
  
     
  return this._http.get(`${this.baseUrl}/api/v1/wishlist`,

  {headers:this.header})
 }
 
}
