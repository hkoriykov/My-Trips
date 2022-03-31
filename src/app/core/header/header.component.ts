import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.authenticationService.isAuthenticated;
  }

  constructor(
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService
  ) {}

  logoutHandler(): void {
    this.authenticationService.isAuthenticated = false;
    this.angularFireAuth.signOut();
  }
}
