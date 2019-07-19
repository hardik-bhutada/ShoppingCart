import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService , private router : Router) { }

  ngOnInit() {
  }

  onSignIn(form : NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;
   var resError =  this.authenticationService.signInUser(email,password)
    setTimeout(
      () => {this.signedInUser();}
    ,3000)
  }

  signedInUser()
  {
    if(firebase.auth().currentUser === null)
    {
      
    }else
    {
      this.router.navigate(['/cartItems']);
    }
  }

  onSignUpClick()
  {
    this.router.navigate(['/signup']);
  }

}
