import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class MedicationsService {
  constructor(private af: AngularFire) {
    
  }
}