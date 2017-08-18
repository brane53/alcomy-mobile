import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2'

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(private auth: AngularFireAuth) {
    this.authState = auth.getAuth();
    auth.subscribe((state: FirebaseAuthState) => {
      console.info('Authenticated: ', state !== null);
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }



  login(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.auth.login({
      email: email,
      password: password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  signup(){
    //return this.auth.createUser()
  }

  logout(): void {
    this.auth.logout();
  }

}