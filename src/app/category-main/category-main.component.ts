import { Component } from '@angular/core';
import { ProductsService } from 'services/products.service';


@Component({
  selector: 'app-category-main',
  templateUrl: './category-main.component.html',
  styleUrls: ['./category-main.component.scss']
})
export class CategoryMainComponent {
  constructor(private _product:ProductsService){}
  ngOnInit():void{
  this.getCategory()
  }

   
 
  

  categoryList:any[]=[];
  getCategory(){
    this._product.getCategories().subscribe({
      next:(response)=>{
        this.categoryList = response.data
      console.log(this.categoryList)

      }
    })

  }
}
