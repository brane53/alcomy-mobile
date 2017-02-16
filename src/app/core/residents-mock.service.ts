import { Injectable } from '@angular/core';
import { Resident } from '../models/models';

@Injectable()
export class MockResidentsService {

  residents: Resident[] = [
    {
      id: '1',
      firstName: 'Brane',
      lastName: 'Vrajich',
      middleName: '',
      profileUrl: 'assets/avatars/brane.jpg',
      medications: [
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        },
      ]
    },
    {
      id: '2',
      firstName: 'Justin',
      lastName: 'Kunz',
      middleName: 'Don',
      profileUrl: 'assets/avatars/justin.jpg',
      medications: [
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        }
      ]
    },
    {
      id: '3',
      firstName: 'Josh',
      lastName: 'Wood',
      middleName: 'Thomas',
      profileUrl: 'assets/avatars/josh.jpg',
      medications: [
        {
          name: 'Tylonal'
        }
      ]
    }

  ];
  constructor() { }
}