import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Resident } from '../models/models';

@Injectable()
export class ResidentsService {
  selectedResident: BehaviorSubject<Resident>;
  constructor(private af: AngularFire) {

  }



}