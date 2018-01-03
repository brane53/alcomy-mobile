import { Action } from '@ngrx/store';
import { Facility } from '../../models/models';

export const ADD_FACILITY =       '[Facilities] AddFacility';
export const DELETE_FACILITY =    '[Facilities] DeleteFacility';
export const LOAD_FACILITIES =    '[Facilities] LoadFacilities';

export class AddFacility implements Action {
  readonly type = ADD_FACILITY;

  constructor(public payload: Facility) { }
}

export class DeleteFacility implements Action {
    readonly type = DELETE_FACILITY;
  
    constructor(public payload: Facility) { }
  }

export class LoadFacilities implements Action {
  readonly type = LOAD_FACILITIES;

  constructor(public payload: Facility[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ALL
= AddFacility
| DeleteFacility
| LoadFacilities;