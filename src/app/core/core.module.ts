import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';
import { FileUploadService } from './services/file-upload/file-upload.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AuthModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [AuthenticationService, FileUploadService],
    };
  }
}
