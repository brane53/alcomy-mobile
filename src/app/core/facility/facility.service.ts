import { Injectable, Inject } from '@angular/core';
//import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Facility } from '../../models/models';
import { Observable } from 'rxjs/observable';
import { AccountService } from '../account/account.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../environments/environments.token';

export const API_ENDPOINT = 'https://alcomy-backend-dev.herokuapp.com/api';

@Injectable()
export class FacilityService {

  
  currentFacility$: BehaviorSubject<Facility>;
  facilities$: Observable<Facility[]>;

  constructor(private account: AccountService, private http: HttpClient, @Inject(APP_CONFIG) private CONFIG) {

  }

  // Add a new facility to a company account
  addFacility(facility: Facility) {
    return this.http.post(`${this.CONFIG.apiEndpoint}/facilities`, facility);
  }

  // Update a facility's information
  updateFacility(id: number, facility: Facility) {
    return this.http.put(`${this.CONFIG.apiEndpoint}/facilities/${id}`, facility);
  }

  // Get a list of facilities accessable by the current user
  // TODO: handle errors
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.CONFIG.apiEndpoint}/facilities`);
  }
  // Get a facility by it's id
  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.CONFIG.apiEndpoint}/facilities/${id}`);
  }

  deleteFacility(id) {
    return this.http.delete<Facility>(`${this.CONFIG.apiEndpoint}/facilities/${id}`);
  }

}