import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.authenticationService.isLogged;
  }
  get userEmail(): any {
    return this.authenticationService.loggedUserEmail;
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  logoutHandler(): void {
    this.authenticationService
      .SignOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }
}
