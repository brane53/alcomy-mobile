import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Facility } from '../../models/models';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../account/account.service';


@Injectable()
export class FacilityService {
  currentFacility$: BehaviorSubject<Facility>;
  facilities$: Observable<Facility[]>;

  constructor(private account: AccountService) {

  }

  // Add a new facility to a company account
  addFacility(facility: Facility) {

  }

  // Update a facility's information

  // Get a list of facilities accessable by the current user
  getFacilities(userId: string) {
    
  }
  // Get a facility by it's id
  

}