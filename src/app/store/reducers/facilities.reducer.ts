import { createSelector } from '@ngrx/store';
import * as FacilitiesActions from './facilities.actions';
import { Facility } from '../../models/models';

export type Action = FacilitiesActions.ALL;

export function facilitiesReducer(state: Facility[] = [], action: Action): Facility {
    switch (action.type) {

        case FacilitiesActions.ADD_FACILITY: {
          return [...state, action.payload];
        }

        case FacilitiesActions.DELETE_FACILITY: {
          return state.filter(facility => facility.id !== action.payload.id);
        }

        case FacilitiesActions.LOAD_FACILITIES: {
          return [...action.payload];
        }

        default: {
            return state;
        }
    }
}


/* 
    Below are the selectors for this reducer. Make sure to make compact selectors as per 
    requirements of your application.
*/
