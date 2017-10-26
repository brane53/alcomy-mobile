import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
    
  }

  get authenticated(): boolean {
    return true;
  }



  login(email: string, password: string)  {
    
  }

  signup() {
    
  }

  logout(): void {
    
  }

}