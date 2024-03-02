import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { SearchPipe } from './search.pipe';
import { SearchbyCategoryPipe } from './searchby-category.pipe';
import { WishPipe } from './wish.pipe';
import { CategoryMainComponent } from './category-main/category-main.component';
import { BlankCompComponent } from './blank-comp/blank-comp.component';
import { ProductTitlePipe } from './product-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    CategoryComponent,
    BrandsComponent,
    ProductsComponent,
    WishlistComponent,
    MyCartComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    ProductsDetailsComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    MainSliderComponent,
    PaymentComponent,
    AllOrdersComponent,
    SearchPipe,
    SearchbyCategoryPipe,
    WishPipe,
    CategoryMainComponent,
    BlankCompComponent,
    ProductTitlePipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
