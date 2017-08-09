import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Resident } from '../models/models';

@Injectable()
export class ResidentsService {

  selectedResident: BehaviorSubject<Resident>;
  constructor(http: Http) {

  }

  // GET /residents - Get all residents or filters set of residents
  public getResidents(query?){
    // will use this.http.get()
  }

  // GET /residents/:id - Get a single resident given their id
  public getResidentById(id: string){

  }

  // POST /residents - Creates a resident
  public addResident(resident: Resident, facilityId: string){

  }

  // PUT /residents/:id - Updates a resident
  public updateResident(resident: Resident){

  }

  // DELETE /resident/:id - Deletes a resident (WARNING: Will delete all related records)
  public deleteResident(){
    
  }


}