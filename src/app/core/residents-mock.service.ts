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
      medications: 3,
      weightLog: [
        {
          date: moment().subtract(4, 'days').format(),
          weight: '145 lbs'
        },
        {
          date: moment().subtract(7, 'days').format(),
          weight: '145 lbs'
        },
        {
          date: moment().subtract(14, 'days').format(),
          weight: '147 lbs'
        },
        {
          date: moment().subtract(30, 'days').format(),
          weight: '148 lbs'
        }
      ],
      emergencyContacts: [
        {
          firstName: 'Jill',
          lastName: 'Kenworkth',
          relationship: 'Daughter',
          homePhone: '555-555-5555',
          cellPhone: '444-444-4444',
          address: {
            city: 'Provo',
            state: 'UT',
            zip: '84602'
          }
        },
        {
          firstName: 'Jake',
          lastName: 'Kenworkth',
          relationship: 'Son-in-Law',
          homePhone: '111-111-1111',
          cellPhone: '222-222-2222',
          address: {
            city: 'Provo',
            state: 'UT',
            zip: '84602'
          }
        }
      ]
      
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
      medications: 2,
      weightLog: [
        {
          date: moment().subtract(4, 'days').format(),
          weight: '145 lbs'
        },
        {
          date: moment().subtract(7, 'days').format(),
          weight: '145 lbs'
        },
        {
          date: moment().subtract(14, 'days').format(),
          weight: '147 lbs'
        },
        {
          date: moment().subtract(30, 'days').format(),
          weight: '148 lbs'
        }
      ],
      emergencyContacts: [
        {
          firstName: 'Sky',
          lastName: 'Kunz',
          relationship: 'Wife',
          cellPhone: '444-444-4444',
          address: {
            city: 'Orem',
            state: 'UT',
            zip: '84602'
          }
        }
      ]
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
      medications: 1,
      weightLog: [
        {
          date: moment().subtract(4, 'days').format(),
          weight: '145 lbs'
        },
        {
          date: moment().subtract(7, 'days').format(),
          weight: '145 lbs'
        },
        {
          date: moment().subtract(14, 'days').format(),
          weight: '147 lbs'
        },
        {
          date: moment().subtract(30, 'days').format(),
          weight: '148 lbs'
        }
      ],
      emergencyContacts: [
        {
          firstName: 'Jenna',
          lastName: 'Wood',
          relationship: 'Wife',
          homePhone: '555-555-5555',
          cellPhone: '444-444-4444',
          address: {
            city: 'Provo',
            state: 'UT',
            zip: '84602'
          }
        }
      ]
    }

  ];
  constructor() { }
}