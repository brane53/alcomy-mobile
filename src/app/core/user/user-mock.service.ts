import { Injectable } from '@angular/core';
import { User } from '../../models/models';


@Injectable()
export class UserMockService {

  currentUser: User = {
    id: 1,
    firstName: 'brane',
    lastName: 'vrajich'
  };

  constructor() { };

  public addUser() {

  }

  public getUser() {
    
  }

}
