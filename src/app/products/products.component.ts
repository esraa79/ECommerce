import { Component, OnInit } from '@angular/core';
import { products } from 'interfaces/products';
import { ProductsService } from 'services/products.service';
import { CartService } from 'services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'services/wishlist.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private product:ProductsService,private _wish:WishlistService,private _cart:CartService,private toastr: ToastrService)
  {
   
  }

  productList:products[]=[];
  isLoading:boolean=true;
  searchKey:string=''
  // wishList=new BehaviorSubject([])
  wishList:any[]=[]
  IdsInWish:any[]=[]
  wishNumber!:number;

  ngOnInit(): void {

    this._wish.getItemsinWish().subscribe({
      next:(response) =>{
               
          const newData = response.data.map((item:any)=>item._id)
          this.wishList=newData
      
        },
       error:(err)=>{console.log(err)}
      })

       this.product.getProducts().subscribe({
        next:(response)=>{
          this.productList = response.data;
          this.isLoading=false;
  
         
        },
        error:(error)=>{console.log(error)}
  
      })
        
  
   


  }


    addtoWish(_id:any)
    {

     
             this._wish.addToWish(_id).subscribe({
               next:(response) =>{
                console.log(response);
                this.wishList=response.data                
                this._wish.wishNumber.next(this.wishList.length)
                
                 this.toastr.success(response.message,'',{
                   closeButton:true,
                   progressBar:true,
                   progressAnimation:'increasing',
                   positionClass:'toast-top-left',
                   timeOut:2000
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
      },
      error:(err)=>{console.log(err)}
    })
  }


  addtoCart(_id:any){
  console.log(_id)
    this._cart.addToCart(_id).subscribe({
      next:(response) =>{
       console.log(response)
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



}
