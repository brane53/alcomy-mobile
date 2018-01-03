import { Injectable, Inject } from '@angular/core';
//import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Facility } from '../../models/models';
import { Observable } from 'rxjs/observable';
import { AccountService } from '../account/account.service';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../environments/environments.token';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { LOAD_FACILITIES, ADD_FACILITY } from '../../store/reducers/facilities.actions';

@Injectable()
export class FacilityService {

  
  currentFacility$: BehaviorSubject<Facility>;
  facilities$: Observable<Facility[]> = this.store.select('facilities');

  constructor(
    private account: AccountService, 
    private http: HttpClient, 
    @Inject(APP_CONFIG) private CONFIG,
    private store: Store<AppState>) { }

  // Add a new facility to a company account
  addFacility(facility: Facility) {
    this.http.post(`${this.CONFIG.apiEndpoint}/facilities`, facility)
      .subscribe((data: Facility) => {
        this.store.dispatch({ type: ADD_FACILITY, payload: data })
      });
  }

  // Update a facility's information
  updateFacility(id: number, facility: Facility) {
    return this.http.put(`${this.CONFIG.apiEndpoint}/facilities/${id}`, facility);
  }

  // Get a list of facilities accessable by the current user
  // TODO: handle errors
  getFacilities(){
    this.http.get<Facility[]>(`${this.CONFIG.apiEndpoint}/facilities`)
      .subscribe((data: Facility[]) => {
        this.store.dispatch({ type: LOAD_FACILITIES, payload: data})
      });
  }
  // Get a facility by it's id
  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.CONFIG.apiEndpoint}/facilities/${id}`);
  }

  deleteFacility(id) {
    return this.http.delete<Facility>(`${this.CONFIG.apiEndpoint}/facilities/${id}`);
  }

}