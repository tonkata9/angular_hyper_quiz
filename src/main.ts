import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { appRoutingProviders } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

bootstrapApplication(AppComponent, {
  providers: [
    appRoutingProviders,
    provideAnimations(),
    importProvidersFrom(MatSidenavModule, MatButtonModule),
  ],
}).catch((err) => console.error(err));
