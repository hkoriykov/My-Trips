import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLogged: boolean = false;
  loggedUserEmail: string | null | undefined;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        user.getIdToken(true);
        this.loggedUserEmail = user.email;
        this.isLogged = true;
      }
    });
  }

  SignUp(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  SignIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  SignOut() {
    this.isLogged = false;
    return this.angularFireAuth.signOut();
  }
}
