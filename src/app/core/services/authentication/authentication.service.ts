import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userState: any;
  isAuthenticated: boolean = false;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        localStorage.setItem('isLogged', 'true');
        this.isAuthenticated = true;
      } else {
        localStorage.setItem('user', '');
        localStorage.setItem('isLogged', 'false');
      }
    });
  }

  SignUp(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  SignIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut() {
    this.isAuthenticated = false;
    return this.angularFireAuth.signOut();
  }
}
