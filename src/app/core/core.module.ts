import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { TripService } from './trip.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AuthModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthenticationService, TripService],
    };
  }
}
