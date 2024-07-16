import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { FormsModule } from '@angular/forms';
import { BackendURL } from '../../settings.json';
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  private navigation = inject(NavigationService);
  navigateToHome() {
    this.navigation.navigateTo('/');
  }
  userData = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log(BackendURL);
    fetch(BackendURL + '/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.userData.username,
        password: this.userData.password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((resp) => resp.text())
      .then((response) => console.log(response));

    this.userData.password = '';
    this.userData.username = '';
  }
}
