import { Injectable } from '@angular/core';
//import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Facility } from '../../models/models';
import { Observable } from 'rxjs/observable';
import { AccountService } from '../account/account.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FacilityService {
  currentFacility$: BehaviorSubject<Facility>;
  facilities$: Observable<Facility[]>;

  constructor(private account: AccountService, private http: HttpClient) {

  }

  // Add a new facility to a company account
  addFacility(facility: Facility) {
    return this.http.post('https://alcomy-backend-dev.herokuapp.com/api/facilities', facility);
  }

  // Update a facility's information

  // Get a list of facilities accessable by the current user
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>('https://alcomy-backend-dev.herokuapp.com/api/facilities');
  }
  // Get a facility by it's id
  

}