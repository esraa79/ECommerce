import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  error!:string;
  isloading:boolean=false;
  constructor(private _auth:AuthService,private _route:Router){
  
    
  }
    
    
  loginForm:FormGroup= new FormGroup({
   
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
   
  })

  loginSubmit(form:FormGroup){
    this.isloading=true;
    if(this.loginForm.valid){
    
      this._auth.login(form.value).subscribe({
        next:(response)=>{
          if(response.message=='success')
          {
            localStorage.setItem('userToken',response.token)
            console.log(localStorage.getItem('userToken'))
            this._auth.saveUserData()
            this._route.navigate(['/home'])

          }
          this.isloading=false;
          },
        error:(err)=>{
          this.error=err.error.message
          this.isloading=false
          console.log(err)}
      })

    }
  
  }
}
