
import { Resident } from '../../models/models';

import * as ResidentsActions from './residents.actions';
import { fakeResidents } from '../fakes/residents.fake';

export type Action = ResidentsActions.Actions;

export function residentsReducer(state: Resident[] = fakeResidents, action: Action) {
  switch(action.type) {
    case ResidentsActions.ADD_RESIDENT: {
      return [...state, action.payload];
    }

    case ResidentsActions.DELETE_RESIDENT: {
      return state.filter(resident => resident.id !== action.payload.id);
    }

    default: {
      return state;
    }
  }
}