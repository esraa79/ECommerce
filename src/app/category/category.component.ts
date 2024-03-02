import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  constructor(private _product:ProductsService){}
  ngOnInit():void{
  this.getCategory()
  }

   
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    
    autoplayMouseleaveTimeout:4000,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  categoryList:any[]=[];
  getCategory(){
    this._product.getCategories().subscribe({
      next:(response)=>{
        this.categoryList = response.data
        // console.log(this.categoryList)

      }
    })

  }

}
