import { Injectable } from '@angular/core';
//import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Facility } from '../../models/models';
import { Observable } from 'rxjs/observable';
import { AccountService } from '../account/account.service';
import { HttpClient } from '@angular/common/http';

export const API_ENDPOINT = 'https://alcomy-backend-dev.herokuapp.com/api';

@Injectable()
export class FacilityService {

  
  currentFacility$: BehaviorSubject<Facility>;
  facilities$: Observable<Facility[]>;

  constructor(private account: AccountService, private http: HttpClient) {

  }

  // Add a new facility to a company account
  addFacility(facility: Facility) {
    return this.http.post(`${API_ENDPOINT}/facilities`, facility);
  }

  // Update a facility's information
  updateFacility(id: number, facility: Facility) {
    return this.http.put(`${API_ENDPOINT}/facilities/${id}`, facility);
  }

  // Get a list of facilities accessable by the current user
  // TODO: handle errors
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${API_ENDPOINT}/facilities`);
  }
  // Get a facility by it's id
  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_ENDPOINT}/facilities/${id}`);
  }

  deleteFacility(id) {
    return this.http.delete<Facility>(`${API_ENDPOINT}/api/facilities/${id}`);
  }

}