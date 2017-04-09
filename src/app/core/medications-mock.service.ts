import { Injectable } from '@angular/core';
import { PrnRecord } from '../models/models';
import * as moment from 'moment';

@Injectable()
export class MockMedicationsService {


  prnRecords: PrnRecord[] = [
    {
      id: '1',
      medication: {
        brandName: 'tylonal',
        genericName: 'acetaminophen',
        description: 'Used to relieve pain',
        instructions: 'You can give no more than 2 tablets every 6 hours'
      },
      reasonGiven: 'Resident complained of having a headache',
      givenAt: moment().subtract(4, 'hours').format(),
      givenBy: {
        firstName: 'Ilija',
        lastName: 'Vrajich'
      },
      followUpDateTime: moment().add(2, 'hours').format()

    },
    {
      id: '2',
      medication: {
        brandName: 'tylonal',
        genericName: 'acetaminophen',
        description: 'Used to relieve pain',
        instructions: 'You can give no more than 2 tablets every 6 hours'
      },
      reasonGiven: 'Resident complained of having a headache',
      givenAt: moment().subtract(4, 'hours').format(),
      givenBy: {
        firstName: 'Ilija',
        lastName: 'Vrajich'
      },
      followUpDateTime: moment().add(2, 'hours').format()

    }
  ];
  constructor() { }
}