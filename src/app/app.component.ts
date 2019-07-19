import { Component, OnInit, DoCheck, APP_ID, APP_INITIALIZER, OnChanges} from '@angular/core';
import { ProductListToCartListService } from './productListToCartList.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , DoCheck{

  cartCount :number;
  filteredStatus = "";
  loggedIn = true;

  constructor(private productToCartService : ProductListToCartListService , private router : Router)
  {

  }

  ngOnInit()
  {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyCRKA1scXnJ2YliF4s5PS5DPWSlyEZu6fo",
        authDomain: "http-angular-app.firebaseapp.com",
        databaseURL: "https://http-angular-app.firebaseio.com",
        projectId: "http-angular-app",
        storageBucket: "http-angular-app.appspot.com",
      }
    )
  }

  ngDoCheck()
  {
    this.cartCount = this.productToCartService.cartCount(); 
    if(firebase.auth().currentUser !== null)
      this.loggedIn = false;
  }

  statusPass(filteredStatus)
  {
    this.productToCartService.setFilteredStatus(filteredStatus);
  }

  onLogOut()
  {
    firebase.auth().signOut().then(function() {
      console.log('SignOut Success');
    }).catch(function(error) {
      console.log('SignOut Error');
    });
    this.loggedIn = true;
    window.alert("Log Out Successful");
  }

  onLogIn()
  {
    this.router.navigate(['/signin']);
  }
  
}
