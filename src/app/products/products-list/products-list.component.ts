import { Component, OnInit, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { ProductListToCartListService } from 'src/app/productListToCartList.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers : []
})
export class ProductsListComponent implements OnInit , DoCheck {

  filteredStatus : string;

  Products  : {image : string , name : string , price : number}[] = [];

  constructor( private productToCartService : ProductListToCartListService)
  { 
    
  }

  ngOnInit() {
    this.Products = this.productToCartService.Products;
  }

  onAddToCart(CartItem : {image : string , name : string , price : number})
  {
    this.productToCartService.pushToCart(CartItem);
    console.log(CartItem);
  }

  ngDoCheck()
  {
    this.filteredStatus = this.productToCartService.getFilteredStatus();
  }

}
