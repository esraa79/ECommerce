import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'services/products.service';
import { CartService } from 'services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { products } from 'interfaces/products';
import { WishlistService } from 'services/wishlist.service';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

 
  constructor(private _cart:CartService,private toastr: ToastrService,private product:ProductsService,private _wish:WishlistService){}

  productList:products[]=[];
  wishList:any[]=[]
  isLoading:boolean=true;
  searchKey:string=''
  ngOnInit(): void {
    this._wish.getItemsinWish().subscribe({
      next:(resp)=>{
        const newData = resp.data.map((item:any)=>item._id)
        //console.log(newData)
        this.wishList=newData
       this.productList = resp.data;
      
      },
      error:(err)=>{
        console.log(err)
      }
    })
    
  }

  addtoCart(_id:any){
  
    this._cart.addToCart(_id).subscribe({
      next:(response) =>{
      //  this.productList
        this._cart.cartNumber.next(response.numOfCartItems)
        console.log(response)
        this.toastr.success(response.message,'',{
          closeButton:true,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-left',
          timeOut:1000
        } );
      },
      error:(err)=>{console.log(err)}
    })
  }


    deleteWish(_id:any):void{
    this._wish.deletefromWish(_id).subscribe({
      next:(response) =>{
        console.log(response)
        this.wishList=response.data
       this._wish.wishNumber.next(this.wishList.length)

        this.toastr.success(response.message,'',{
          closeButton:true,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass:'toast-top-left',
          timeOut:2000
        } );
         const newwish = this.productList.filter((item)=> this.wishList.includes(item._id))
         this.productList = newwish;
        }
    })
  }
  

}
