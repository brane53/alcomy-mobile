import { Injectable } from '@angular/core';
import { Facility } from '../../models/models';




@Injectable()
export class FacilityMockService {

  private fakeFacilities: Facility[] = [
    {
      id: 1,
      name: 'Paradise Valley Care',
      displayName: 'PVC',
      status: 'active',
      addressLine1: '9525 Gallina Ct',
      addressLine2: '',
      city: 'atascadero',
      stateOrProvince: 'CA',
      postalCode: '93422',
      facilityNumber: 123456,
      users: [1, 2, 3]
    }
  ];

  currentFacility: number = 1;

  constructor() {};

  public addFacility() {

  }

  public getFacilies() {

  }

}
