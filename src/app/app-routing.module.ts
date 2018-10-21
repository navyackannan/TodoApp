import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { MainComponent} from './main/main.component';

const appRoutes : Routes = [
  { path : '', component : LoginComponent, pathMatch :'full'},
  { path : 'logout', component : LoginComponent, pathMatch :'full'},
  { path : 'main', component:MainComponent, pathMatch:'full'}]

  @NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(appRoutes) ]
  })
  
  export class AppRoutingModule {}