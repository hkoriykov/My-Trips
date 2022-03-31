import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated: boolean = false;

  constructor() {}

  /* Sign up */
  // SignUp(email: string, password: string) {
  //   return this.angularFireAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((res: any) => {
  //       this.isAuthenticated = true;
  //       console.log('You are Successfully signed up!', res);
  //     })
  //     .catch((error: { message: any }) => {
  //       console.log('Something is wrong:', error.message);
  //     });
  // }

  /* Sign in */
  // SignIn(email: string, password: string): Promise<any> {
  //   return this.angularFireAuth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       this.isAuthenticated = true;
  //       console.log('You are in!');
  //       return res;
  //     })
  //     .catch((err: { message: any }) => {
  //       console.log('Something went wrong:', err.message);
  //       return err;
  //     });
  // }

  /* Sign out */
  // SignOut() {
  //   this.isAuthenticated = false;
  //   this.angularFireAuth.signOut();
  // }
}
