import { Injectable } from '@angular/core';
import { Resident } from '../models/models';
import * as moment from 'moment';

@Injectable()
export class MockResidentsService {

  residents: Resident[] = [
    {
      id: '1',
      firstName: 'Brane',
      lastName: 'Vrajich',
      middleName: '',
      gender: 'male',
      birthDate: moment('1987-11-10').format(),
      ssn: '999-99-9999',
      code: 'DNR',
      isAmbulatory: true,
      isVerbal: true,
      religion: 'LDS',
      profileUrl: 'assets/avatars/brane.jpg'
    },
    {
      id: '2',
      firstName: 'Justin',
      lastName: 'Kunz',
      middleName: 'Don',
      profileUrl: 'assets/avatars/justin.jpg'
    },
    {
      id: '3',
      firstName: 'Josh',
      lastName: 'Wood',
      middleName: 'Thomas',
      profileUrl: 'assets/avatars/josh.jpg'
    }

  ];
  constructor() { }
}