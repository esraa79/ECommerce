import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wish'
})
export class WishPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
