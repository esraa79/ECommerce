import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient,private _router:Router) {
    


    if(localStorage.getItem('userToken')!==null)
    {
      this.saveUserData()
    }
   }
  userData=new BehaviorSubject(null)

  register(formdata:any):Observable<any>
  {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formdata)
   }

   login(formdata:any):Observable<any>
   {
     return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formdata)
    }

    saveUserData(){
      let encodeToken:any=localStorage.getItem('userToken')
      let decodeToken:any = jwtDecode(encodeToken);
      this.userData.next(decodeToken);
   
    }
    logOut(){
      this.userData.next(null)
      localStorage.removeItem('userToken')
      localStorage.clear()   
      this._router.navigate(['/signin'])
    }

    forgetPsw(formData:any):Observable<any>
    {
      return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,formData)
    }
    verifyCode(formData:any):Observable<any>
    {
      return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,formData)
    }
    resetPsw(formData:any):Observable<any>
    {
      return this._http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,formData)
    }

}
