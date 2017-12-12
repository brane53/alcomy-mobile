import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Resident } from '../../models/models';
import { Observable } from 'rxjs/Observable';

export const API_ENDPOINT = 'https://alcomy-backend-dev.herokuapp.com/api';

@Injectable()
export class ResidentsService {


  selectedResident: BehaviorSubject<Resident>;

  // TODO: Change type
  private residents$$: BehaviorSubject<Resident[]>;
  residents$: Observable<Resident[]>;

  constructor(private http: HttpClient) {

  }

  // GET /residents - Get all residents or filters set of residents
  public getResidents(query?) {
    return this.http.get(`${API_ENDPOINT}/residents`)
    .subscribe(
      residents => {
        
      }
    );
  }

  // GET /residents/:id - Get a single resident given their id
  public getResidentById(id: string) {
    return this.http.get(`${API_ENDPOINT}/residents/${id}`);
  }

  // POST /residents - Creates a resident
  public addResident(resident: Resident) {
    return this.http.post(`${API_ENDPOINT}/residents`, resident);
  }

  // PUT /residents/:id - Updates a resident
  public updateResident(resident: Resident) {
    return this.http.put(`${API_ENDPOINT}/residents`, resident);
  }

  // DELETE /resident/:id - Deletes a resident (WARNING: Will delete all related records)
  public deleteResident(id: number) {
    return this.http.delete(`${API_ENDPOINT}/residents/${id}`);
  }


}
