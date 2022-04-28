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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firebaseErrorMessage!: string;

  registerFormGroup: FormGroup = this.formBuilder.group({
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

  handleRegister(): void {
    this.authenticationService
      .SignUp(
        this.registerFormGroup.value.email,
        this.registerFormGroup.value.password
      )
      .then((res: any) => {
        console.log('You are Successfully signed up!', res);
        this.authenticationService.isLogged = true;
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
        this.firebaseErrorMessage = err;
      });
  }
}
