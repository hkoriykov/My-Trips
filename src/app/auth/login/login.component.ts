import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  firebaseErrorMessage!: string;

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  handleLogin() {
    this.authenticationService
      .SignIn(
        this.loginFormGroup.value.email,
        this.loginFormGroup.value.password
      )
      .then(() => {
        console.log('You are in!');
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        this.firebaseErrorMessage = err;
      });
  }
}
