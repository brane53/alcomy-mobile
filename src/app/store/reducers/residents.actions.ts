import { Action } from '@ngrx/store';
import { Resident } from '../../models/models';

export const ADD_RESIDENT =     '[Residents] AddResident';
export const DELETE_RESIDENT =  '[Residents] DeleteResident';
export const LOAD_RESIDENTS = '[Residents] LoadResident';

export class AddResident implements Action {
  readonly type = ADD_RESIDENT;

  constructor(public payload: Resident) { }
}

export class DeleteResident implements Action {
    readonly type = DELETE_RESIDENT;
  
    constructor(public payload: Resident) { }
  }

export class LoadResidents implements Action {
  readonly type = LOAD_RESIDENTS;

  constructor(public payload: Resident[]) { };
} 

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ALL
= AddResident
| DeleteResident
| LoadResidents;