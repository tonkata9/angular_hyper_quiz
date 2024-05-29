import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideNavComponent, RouterOutlet, LogInComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
