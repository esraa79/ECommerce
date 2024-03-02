import { Component } from '@angular/core';

@Component({
  selector: 'app-blank-comp',
  templateUrl: './blank-comp.component.html',
  styleUrls: ['./blank-comp.component.scss']
})
export class BlankCompComponent {
  goToUp(){
    scrollTo(0,0)
   }

}
