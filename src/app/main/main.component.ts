import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private tService:TodoService, private router : Router
  ) { }
  item;
  list ;list_values ;
  ngOnInit() {
    this.list_values = this.tService.getValues();
  }
  getName(event:any){
    this.item = event.target.value;
  }
  add_item(){
    if(!this.item){
      alert("Enter title");
    }
    else{
      this.tService.create(this.item);
    }
  
  }
  select_item(name){
    var element = <HTMLInputElement> document.getElementById("chk");
    var isChecked = element.checked;
    //console.log(isChecked,name);
    this.item = name;
  }
  edit_item(name){
    console.log(name);
    this.tService.update(this.item,name);
  }
  delete_item(name){
    this.tService.delete(name);
  }
  logout(){
    this.router.navigate(['logout']);
  }
  
}
