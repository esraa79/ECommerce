import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryComponent } from './category/category.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { authGuard } from './auth.guard';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PaymentComponent } from './payment/payment.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CategoryMainComponent } from './category-main/category-main.component';

const routes: Routes = [
  
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'category',canActivate:[authGuard],component:CategoryMainComponent},
  {path:'cart',canActivate:[authGuard],component:MyCartComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  {path:'productsDetails/:productId',canActivate:[authGuard],component:ProductsDetailsComponent},
  // {path:'products',component:SignInComponent},

  {path:'payment',canActivate:[authGuard],component:PaymentComponent},
  {path:'allorders',canActivate:[authGuard],component:AllOrdersComponent},
  {path:'wishlist',canActivate:[authGuard],component:WishlistComponent},
  {path:'signin',component:SignInComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'signup',component:SignUpComponent},
  {path:'resetpassword',component:ResetPasswordComponent},
  
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
