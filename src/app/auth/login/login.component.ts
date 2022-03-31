import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  signIn() {
    this.angularFireAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('You are in!');
        this.authenticationService.isAuthenticated = true;
        this.router.navigate(['/home']);

        this.email = '';
        this.password = '';
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        this.authenticationService.isAuthenticated = false;
        this.errorMessage = err;
      });
  }
}
