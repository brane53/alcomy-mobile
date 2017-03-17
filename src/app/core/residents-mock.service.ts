import { Injectable } from '@angular/core';
import { Resident, Medication, MedicationRecord } from '../models/models';
import * as moment from 'moment';

@Injectable()
export class MockResidentsService {

  residents: Resident[] = [
    {
      id: '1',
      firstName: 'blake',
      lastName: 'kenworthy',
      middleName: '',
      gender: 'male',
      birthDate: moment('1987-11-10').format(),
      ssn: '999-99-9999',
      code: 'DNR',
      isAmbulatory: true,
      isVerbal: true,
      religion: 'LDS',
      profileUrl: 'assets/avatars/blake.jpg',
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
      ],
      facilityInfo: {
        name: 'Paradise Valley Care',
        admissionDate: moment('2014-11-05').format(),
        room: '1'
      },
      paymentInfo: {
        rate: 5500,
        method: 'check',
        billTo: 'Jill Kenworthy'
      },
      medications: [
        {
          id: '1',
          brandName: 'lipitor',
          genericName: 'atorvastatin',
          description: 'used along with a proper diet to help lower "bad" cholesterol and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) in the blood. It belongs to a group of drugs known as "statins." It works by reducing the amount of cholesterol made by the liver. Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks.',
          instructions: 'take 1 tablet by mouth every day',
          createDate: moment().subtract(6, 'months').format(),
          createdBy: {
            id: '1',
            firstName: 'ilija',
            lastName: 'vrajich',
          },
          startDate: moment().subtract(6, 'months').format(),
          status: 'active',
          endDate: '',
          strength: {
            amount: 10,
            measurement: 'mg'
          },
          form: 'tablet',
          dosage: {
            amount: 1,
            form: 'tablet'
          },
          startQuantity: 31,
          imageUrl: 'assets/medications/lipitor.jpg',
          quantity: 31
        }
      ]
    },
    {
      id: '2',
      firstName: 'justin',
      lastName: 'kunz',
      middleName: 'don',
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
      firstName: 'josh',
      lastName: 'wood',
      middleName: 'thomas',
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