import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Resident } from '../../models/models';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { LOAD_RESIDENTS } from '../../store/reducers/residents.actions';
import { fakeResidents } from '../../store/fakes/residents.fake';

@Injectable()
export class ResidentsMockService {

  currentResident$

  // Behavior Subject of type resident array whose starting value is mockResidents
  //private residents$$: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>(this.fakeResidents);
  //residents$: Observable<Resident[]> = this.residents$$.asObservable();

  residents$ = this.store.select('residents');

  constructor(private http: HttpClient, private store: Store<AppState>) {
    store.dispatch({type: LOAD_RESIDENTS, payload: fakeResidents});
  }

  createResident(resident: Resident) {
    return this.http.post('api/residents', resident);
      // .map(this.extractData);
  };


  getResidents() {
    //return Observable.from(this.fakeResidents);
    //this.http.get('api/residents')
      // .map(this.extractData)
     /*  .subscribe(
        residents => this.residents$$.next(this.fakeResidents),
        error => console.log('Error: ', error)
      ); */
      
  }

 /*  private extractData(res: HttpResponse<any>) {
    let body = res.json();
    console.log('Body: ', body);
    return body.data;
  } */

  private handleError(error) {
    // let errorMessage: string;
    console.log('The Error: ', error);
    // if (error instanceof Response) {
    //   const body = error.json();
    //   const err = body.
    // }
  }


}
