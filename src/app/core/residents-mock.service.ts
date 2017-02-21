import { Injectable } from '@angular/core';
import { Resident } from '../models/models';
import * as moment from 'moment';

@Injectable()
export class MockResidentsService {

  residents: Resident[] = [
    {
      id: '1',
      firstName: 'Blake',
      lastName: 'Kenworthy',
      middleName: '',
      gender: 'male',
      birthDate: moment('1987-11-10').format(),
      ssn: '999-99-9999',
      code: 'DNR',
      isAmbulatory: true,
      isVerbal: true,
      religion: 'LDS',
      profileUrl: 'assets/avatars/blake.jpg',
      medications: 3
      
    },
    {
      id: '2',
      firstName: 'Justin',
      lastName: 'Kunz',
      middleName: 'Don',
      gender: 'male',
      birthDate: moment('1987-01-09').format(),
      ssn: '888-888-8888',
      code: 'DNR',
      isAmbulatory: true,
      isVerbal: true,
      religion: 'LDS',
      profileUrl: 'assets/avatars/justin.jpg',
      medications: 2
    },
    {
      id: '3',
      firstName: 'Josh',
      lastName: 'Wood',
      middleName: 'Thomas',
      gender: 'male',
      birthDate: moment('1986-11-19').format(),
      code: 'DNR',
      isAmbulatory: true,
      isVerbal: false,
      religion: 'LDS',
      profileUrl: 'assets/avatars/josh.jpg',
      medications: 1
    }

  ];
  constructor() { }
}