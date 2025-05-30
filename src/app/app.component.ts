import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <input [(ngModel)]="email" type="email" placeholder="Enter your email" />
  {{ email }}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  public email: string = '';
}
