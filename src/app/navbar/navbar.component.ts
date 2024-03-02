import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'services/auth.service';
import { CartService } from 'services/cart.service';
import { WishlistService } from 'services/wishlist.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean=false
  cartNumber!:number;
  wishNumber!:number;
   constructor(private _auth:AuthService,private _cart:CartService,private _wish:WishlistService){
    this._wish.wishNumber.subscribe({
      next:(resp)=>{
        this.wishNumber=resp
       console.log(resp)

      }
    })
   
    this._cart.cartNumber.subscribe({
      next:(resp)=>{
        this.cartNumber=resp
       console.log(resp)

      }
    })
    _auth.userData.subscribe({
      next:()=>{

        if(_auth.userData.getValue()!==null){
          this.isLogin = true;
         }
         else{
          this.isLogin=false;
         }

      }
    })
   
  }

  logOut()
  {
    this._auth.logOut()
  }

}
