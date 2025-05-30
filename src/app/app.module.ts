import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Ensure this path is correct
import { HomeComponent } from './components/home/home.component';   // Ensure this path is correct

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  
    BrowserModule, // Required for browser-specific functionalities
    FormsModule,   // Required for template-driven forms
    RouterModule.forRoot([ // Configure routes here
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [] // Bootstrap the AppComponent
})
export class AppModule {
  
}