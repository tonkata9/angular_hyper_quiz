import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { FormsModule } from '@angular/forms';
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
    console.log('Sign up form submitted with data:', this.userData);
  }
}
