import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Resident } from '../../models/models';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG } from '../../environments/environments.token';

@Injectable()
export class ResidentsService {


  selectedResident: BehaviorSubject<Resident>;

  // TODO: Change type
  private residents$$: BehaviorSubject<Resident[]>;
  residents$: Observable<Resident[]>;

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private CONFIG) {

  }

  // GET /residents - Get all residents or filters set of residents
  public getResidents() {
    return this.http.get<Resident[]>(`${this.CONFIG.apiEndpoint}/residents`);
  }

  // GET /residents/:id - Get a single resident given their id
  public getResidentById(id: string) {
    return this.http.get<Resident>(`${this.CONFIG.apiEndpoint}/residents/${id}`);
  }

  // POST /residents - Creates a resident
  public addResident(resident: Resident) {
    return this.http.post(`${this.CONFIG.apiEndpoint}/residents`, resident);
  }

  // PUT /residents/:id - Updates a resident
  public updateResident(resident: Resident) {
    return this.http.put(`${this.CONFIG.apiEndpoint}/residents`, resident);
  }

  // DELETE /resident/:id - Deletes a resident (WARNING: Will delete all related records)
  public deleteResident(id: number) {
    return this.http.delete(`${this.CONFIG.apiEndpoint}/residents/${id}`);
  }


}
