import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState } from 'angularfire2';
import { User } from '../models/models';
@Injectable()
export class AccountService {
  id: string; // id of the current company account

  constructor(private af: AngularFire, private auth: AngularFireAuth) {

  }

  // get the account id that the user belongs to
  getAccount(): string {
    return 'hey'
  }

  // create a new company account
  createAccount(user: User, company){
    // user object that is to be created in firebase
    let newUser: User = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      permissions: [
        'READ',
        'WRITE'
      ]
    }

    const promise = this.auth.createUser({email: user.email, password: user.password});

    promise
    .then((state: FirebaseAuthState) => {
      let accountKey = this.af.database.list('/accounts').push(undefined).key;
      let employeeKey = this.af.database.list(`/employees`).push(undefined).key;
      
      return this.af.database.list(`/users/${state.uid}`).push(newUser);
    })
    .catch((err) => {

    })
  }
}