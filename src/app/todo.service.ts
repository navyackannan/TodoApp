import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  items =[];in_it;
  constructor() { }
  getValues(){
    return this.items;
  }
  create(item){
    this.items.push(item);
  }
  update(new_it,old_it){
    console.log(old_it,new_it);
    this.items.forEach((vv,index)=>{
      if(vv == old_it){
        console.log(index);
        this.in_it = index;
      }
    })
    console.log(this.in_it);
   this.items.splice(this.in_it,1,new_it);
  }
  delete(name){
    console.log(name);
    this.items.forEach((vv,index)=>{
      if(vv == name){
        console.log(index);
        this.items.splice(index,1);
      }
    })
  }
} 
