import { Injectable } from '@angular/core';
import { Facility } from '../../models/models';




@Injectable()
export class FacilityMockService {

  private fakeFacilities: Facility[] = [
    {
      legalName: 'Paradise Valley Care',
      displayName: 'PVC',
      status: 'active',
      address: {
        line1: '9525 Gallina Ct',
        line2: '',
        city: 'atascadero',
        stateOrProvice: 'CA',
        zipOrPostalCode: '93422',
        country: 'usa'
      },
      licenseNumber: '123456',
      //contacts: ,
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
