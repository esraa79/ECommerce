import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandsService  {

  constructor(private _http:HttpClient) { }

  baseUrl='https://ecommerce.routemisr.com';
 

  getAllBrands():Observable<any>{
    return this._http.get(`${this.baseUrl}/api/v1/brands`)
  }


}
