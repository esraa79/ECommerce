import { Pipe, PipeTransform } from '@angular/core';
import { products } from 'interfaces/products';

@Pipe({
  name: 'searchbyCategory'
})
export class SearchbyCategoryPipe implements PipeTransform {

  transform(products:products[], searchKey:string): products[] {
    return products.filter((product)=>{return product.category.name.includes(searchKey)});
  }

}
