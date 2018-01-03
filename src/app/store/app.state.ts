import { Resident, Facility } from '../models/models';

export interface AppState {
  residents: Resident[];
  selectedResident: Resident;
  facilities: Facility[];
}