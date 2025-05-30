import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ],
  standalone: true // Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  username: string = '';
}
