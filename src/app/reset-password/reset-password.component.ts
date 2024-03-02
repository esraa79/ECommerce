import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  error!:string;
  isloading:boolean=false;
  constructor(private _auth:AuthService,private _route:Router){}
  resetForm:FormGroup= new FormGroup({

   
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
   
  })

  resetSubmit(form:FormGroup){
    this.isloading=true;
    if(this.resetForm.valid){
    
      this._auth.resetPsw(form.value).subscribe({
        next:(response)=>{
          if(response.token !==null)
          {
           
            this._route.navigate(['/signin'])

          }
          this.isloading=false;
          console.log(response)},
        error:(err)=>{
          this.error=err.error.message
          this.isloading=false
          console.log(err)}
      })

    }
  
  }
}
