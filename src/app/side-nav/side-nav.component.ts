import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../home/home.component';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { inject } from '@angular/core';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrl: 'side-nav.component.css',
  standalone: true,
  imports: [
    NgIf,
    MatSidenavModule,
    MatButtonModule,
    HomeComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  private NavigationService = inject(NavigationService);
  reason = '';

  reason2 = true;
  navigateTo(route: string) {
    this.NavigationService.navigateTo(route);
  }
  about_home(props: boolean) {
    this.reason2 = props;
  }

  performaction1() {
    this.about_home(true);
    this.NavigationService.navigateTo('/');
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = true;
}
