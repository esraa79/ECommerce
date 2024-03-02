import { Pipe, PipeTransform } from '@angular/core';
import { products } from 'interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:products[], searchword:string): products[] {
    return products.filter((product)=>{return product.category.name.toUpperCase().includes(searchword.toUpperCase()) || product.title.toUpperCase().includes(searchword.toUpperCase()) });
  }

}
