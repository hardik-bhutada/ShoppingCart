import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartItemsListComponent } from './cart/cart-items-list/cart-items-list.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path : '' , component : ProductsListComponent},
  {path : 'cartItems' ,  component : CartItemsListComponent},
  {path : 'signin' , component : SigninComponent},
  {path : 'signup' , component : SignupComponent},
  { path: '**', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
