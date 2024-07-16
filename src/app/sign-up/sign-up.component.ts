import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BackendURL } from '../../settings.json';
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
    fetch(BackendURL + '/register', {
      method: 'POST',
      body: JSON.stringify({
        username: this.userData.username,
        password1: this.userData.password,
        password2: this.userData.confirm_password,
        email: this.userData.email,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((resp) => resp.text())
      .then((response) => console.log(response));
  }
}
