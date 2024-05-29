import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private router = inject(Router);
  navigateToHome() {
    this.router.navigate(['/']);
  }
  userData = {
    username: '',
    confirm_password: '',
    password: '',
    email: '',
  };

  onSubmit() {
    console.log('Sign up form submitted with data:', this.userData);
  }
}
