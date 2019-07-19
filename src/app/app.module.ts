import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CartItemsListComponent } from './cart/cart-items-list/cart-items-list.component';
import { ProductListToCartListService } from './productListToCartList.service';
import { FilterPipe } from './filter.pipe';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthenticationService } from './auth/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CartItemsListComponent,
    FilterPipe,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductListToCartListService , AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
