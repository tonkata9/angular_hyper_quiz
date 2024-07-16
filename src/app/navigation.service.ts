import { Injectable, inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private router = inject(Router);
  // constructor(private router: Router) {}
  // navigateTo(route: string) {
  //   this.router.navigate([`/${route}`]);
  // }
  navigateTo(url: string, extras?: NavigationExtras) {
    this.router.navigate([url], extras);
  }

  getCurrentNavigation() {
    return this.router.getCurrentNavigation();
  }
}
