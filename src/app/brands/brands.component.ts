import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private _brand:BrandsService){}
  brandList:any[]=[];

  ngOnInit(): void {
    this._brand.getAllBrands().subscribe({
      next:(resp) =>
      {

        this.brandList=resp.data
    

      },
      error:(err)=>
      {
        console.log(err)
      }
    })
  }

}
