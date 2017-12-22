
import { Resident } from '../../models/models';

import { ADD_RESIDENT, DELETE_RESIDENT, Actions, AddResident, DeleteResident } from './residents.actions';

export type Action = Actions;

export function ResidentsReducer(state: Resident[] = [], action: Action) {
  switch(action.type) {
    case ADD_RESIDENT: {
      return [...state, action.payload];
    }

    case DELETE_RESIDENT: {
      return state.filter(resident => resident.id !== action.payload.id);
    }

    default: {
      return state;
    }
  }
}