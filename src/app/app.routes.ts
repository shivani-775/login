import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },           // homepage
    { path: 'login', component: LoginComponent },     // login page
  ];
  
