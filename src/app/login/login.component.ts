import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router : Router,) { }
  username;password;
  ngOnInit() {
  }
  do_login(){
    if(this.username == 'admin' && this.password == '123'){
      this.router.navigate(['main']);
    }
    else{
      alert("Username or Password is inorrect")
    }
   
  }
}
