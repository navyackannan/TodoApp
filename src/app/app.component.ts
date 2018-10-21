import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private tService:TodoService,private router : Router
  ){}
  items = [];

}
