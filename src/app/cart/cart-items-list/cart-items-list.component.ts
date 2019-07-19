import { Component, OnInit, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, OnChanges, Input } from '@angular/core'; 
import { ProductListToCartListService } from 'src/app/productListToCartList.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.css'],
  providers : []
})
export class CartItemsListComponent implements OnInit{

  span: HTMLElement;
  totalCount : number = 0;
  cartItems : {image : string , name : string , price : number}[] = []

  constructor(private productToCartService : ProductListToCartListService , private router : Router) {
    this.getTotalAmount();
   }

  ngOnInit() {
    this.cartItems = this.productToCartService.Carts;
    console.log(this.cartItems);  
    if(this.cartItems.length !== 0)
    {
      var elem = document.getElementById('noItems');
      elem.parentNode.removeChild(elem);
    } 
  }

  removeCartItem()
  {
    let removedItem = this.cartItems.pop();
    this.cartItems = this.productToCartService.Carts;

    this.totalCount -= removedItem.price;
    console.log(this.totalCount);
    
  }

  getTotalAmount()
  {
    this.totalCount = this.productToCartService.serviceTotalCount;
    console.log(this.totalCount);
  }

  isUserLoggedIn()
  {
    var user = firebase.auth().currentUser;

    if(user === null)
    {
      this.router.navigate(['/signin']);
    }
    else
    {
      if(this.totalCount === 0)
      {
        window.alert("Please Select a product to purchase !!!");
      }
      else{
        console.log("successfull");
        this.productToCartService.emptyCart();
        this.cartItems.splice(0,this.cartItems.length);
        this.totalCount = 0;
        window.alert("Purchase Successfull !!!");
      }
      
      
    }
  }

}
