import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  error!:string;
  isloading:boolean=false;
  constructor(private _auth:AuthService,private _route:Router){}

  registerForm:FormGroup= new FormGroup({

    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,8}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,8}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)]),
  
  },{validators:[this.confirmPsw]} as FormControlOptions)
  confirmPsw(group:FormGroup){
    const Psw =group.get('password')
    const rePsw =group.get('rePassword')
    if(rePsw?.value ==''){
      rePsw.setErrors({required:true})
    }
    else if(Psw?.value !== rePsw?.value){
      rePsw?.setErrors({misMatch:true})
    }
  }

  registerSubmit(form:FormGroup){
    this.isloading=true;
    if(this.registerForm.valid){
    
      this._auth.register(form.value).subscribe({
        next:(response)=>{
          if(response.message=='success')
          {
            this._route.navigate(['/signin'])

          }
          this.isloading=false;
          // console.log(response)
        
        },
        error:(err)=>{
          this.error=err.error.message
          this.isloading=false
          console.log(err)}
      })

    }

  
  }

}
