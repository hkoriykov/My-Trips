import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  signUp(): void {
    this.angularFireAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((res: any) => {
        console.log('You are Successfully signed up!', res);
        this.authenticationService.isAuthenticated = true;
        this.router.navigate(['/home']);

        this.email = '';
        this.password = '';
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
        this.errorMessage = err;
      });
  }
}
