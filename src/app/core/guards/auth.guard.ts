import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this._authService.isLogged) {
      return true;
    }

    return this.router.createUrlTree(['/login']);
  }
}
