import { Injectable } from '@angular/core';
import { Employee } from '../models/models';

@Injectable()
export class MockEmployeeService {

  employees: Employee[] = [
    {
      id: '1',
      firstName: 'Ilija',
      lastName: 'Vrajich',
      profileUrl: 'assets/avatars/ilija.jpg'
    },
    {
      id: '2',
      firstName: 'Tommy',
      lastName: 'Wells',
      profileUrl: 'assets/avatars/tommy.jpg'
    },
    {
      id: '3',
      firstName: 'Ruth',
      lastName: 'Vrajich',
      profileUrl: 'assets/avatars/ruth.jpg'
    }
  ];

  staffGroups: any = [
    {
      id: '1',
      name: 'Caregivers',
      members: [
        '1', '2', '3'
      ]
    },
    {
      id: '2',
      name: 'Med Techs',
      members: [
        '1', '2'
      ]
    }
  ]
  constructor() { }
}