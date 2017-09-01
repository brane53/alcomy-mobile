import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Resident } from '../../models/models';
import { Observable } from 'rxjs/Observable';

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
    // will use this.http.get()
  }

  // GET /residents/:id - Get a single resident given their id
  public getResidentById(id: string) {

  }

  // POST /residents - Creates a resident
  public addResident(resident: Resident, facilityId: number) {

  }

  // PUT /residents/:id - Updates a resident
  public updateResident(resident: Resident) {

  }

  // DELETE /resident/:id - Deletes a resident (WARNING: Will delete all related records)
  public deleteResident() {

  }


}
