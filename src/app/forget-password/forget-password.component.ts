import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  msgSuccess:any
  msgSu:any
  isSending:boolean=false;
  errorMsg!:string
  constructor(private _auth:AuthService,private _router:Router){}
  forgetPassword=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
  })
  verifyCode=new FormGroup({
    resetCode:new FormControl()
  })


  sendCode(form:FormGroup):void{
      this._auth.forgetPsw(form.value).subscribe({
      next:(response)=>{
        // console.log(response)
        this.msgSuccess=response.message
        document.querySelector('.forget-psw')?.classList.add('d-none')
        document.querySelector('.verify-code')?.classList.remove('d-none')

      },
      error:(err)=>{
        this.errorMsg = err.error.message;
        console.log(err)
 

        
      }
});

  }

  verify(form:FormGroup):void{
    this._auth.verifyCode(form.value).subscribe({
    next:(response)=>{
    
      this.msgSu=response.message;
      if(response.status == 'Success')
      {
        this._router.navigate(['/resetpassword'])
      }

    },
    error:(err)=>{
      console.log(err);
      
    }
});

}
}
