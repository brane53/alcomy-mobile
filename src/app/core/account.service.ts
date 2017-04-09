import { Injectable } from '@angular/core';
import { AngularFire, AngularFireAuth, FirebaseListObservable, FirebaseObjectObservable, FirebaseAuthState } from 'angularfire2';
import { User, Role } from '../models/models';
import * as moment from 'moment';
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
  createAccount(user: User, account){


    let accountInfo = {
      companyName: account.companyName,
      createdOn: moment().format()
    }

    let defaultRole: Role = {
      name: 'Account Owner',
      isCustom: false,
      isGlobal: true,
      createdOn: moment().format(),
      createdBy: 'Alcomy',
      permissions: [
        {
          name: 'Users',
          level: 'full'
        },
        {
          name: 'Users',
          level: 'full'
        },
        {
          name: 'Users',
          level: 'full'
        },
        {
          name: 'Users',
          level: 'full'
        },
        {
          name: 'Users',
          level: 'full'
        }
      ]
    }

    // create the user in firebase
    const promise = this.auth.createUser({email: user.email, password: user.password});

    promise
    .then((state: FirebaseAuthState) => {
      // create the keys for account and employees
      let accountKey = this.af.database.list(`/accounts`).push(undefined).key;
      let employeeKey = this.af.database.list(`/employeePrimaryInfo`).push(undefined).key;
      let roleKey = this.af.database.list(`/roles/${accountKey}`).push(undefined).key;

      // user object that is to be created in firebase
      let userInfo: User = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roles: [
          roleKey
        ]
      };

      let dataToSave = {};

      dataToSave[`/accounts/${accountKey}`] = accountInfo;
      dataToSave[`/employeePrimaryInfo/${employeeKey}`] = userInfo;
      dataToSave[`/roles/${accountKey}/${roleKey}`] = defaultRole;
      
      //return this.af.database.list(`/users/${state.uid}`).push(userInfo);
    })
    .catch((err) => {
      // Delete the user that was created

    })
  }
}