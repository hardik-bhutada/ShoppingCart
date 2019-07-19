import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService , 
    private router  : Router , private route : ActivatedRoute) { }

  ngOnInit() {
  }

  onSignUp(formData : NgForm)
  {
    const email = formData.value.email;
    const password = formData.value.password; 
    var value = this.authenticationService.signUpUser(email,password);
    if(value === "error")
    {
      this.router.navigate(['/signup'] , {relativeTo : this.route});
    }
    else 
    {
      this.router.navigate(['/signin'] , {relativeTo : this.route});
    }
  }

}
