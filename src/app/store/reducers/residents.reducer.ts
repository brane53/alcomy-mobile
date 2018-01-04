
import { Resident } from '../../models/models';
import * as ResidentsActions from './residents.actions';
import { fakeResidents } from '../fakes/residents.fake';

export type Action = ResidentsActions.ALL;

export function residentsReducer(state: Resident[] = [], action: Action): Resident[] {
  switch(action.type) {

    case ResidentsActions.ADD_RESIDENT: {
      return [...state, action.payload];
    }

    case ResidentsActions.DELETE_RESIDENT: {
      return state.filter(resident => resident.id !== action.payload.id);
    }

    case ResidentsActions.LOAD_RESIDENTS: {
      return [...action.payload];
    }

    default: {
      return state;
    }
  }
}