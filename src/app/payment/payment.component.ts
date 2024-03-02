import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'services/auth.service';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  ngOnInit(): void {

    this.getMyCart()
  }
  constructor(private _cart:CartService,){}
checkOut = new FormGroup({
  
  details:new FormControl(),
  phone:new FormControl(),
  city:new FormControl(),



})
cartID:string =''
getMyCart(){
 
  
  this._cart.getItemsinCart().subscribe({
    next:(resp)=>
    {
     
    
      this.cartID=resp.data._id;
      console.log(this.cartID);
    
      
   
    },
     error:(err)=>console.log(err)
  })
}
payment(form:FormGroup ){
this._cart.checkOut(this.cartID,form.value).subscribe({
  next:(resp) => {
    console.log(resp)
    window.location=resp.session.url;
  },
  error:(err) => {
    console.log(err)
  }
})

}


}
