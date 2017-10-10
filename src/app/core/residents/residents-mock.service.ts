import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Resident } from '../../models/models';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ResidentsMockService {

  private fakeResidents: Resident[] = [
    {
      id: 1,
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
          id: 1,
          brandName: 'lipitor',
          genericName: 'atorvastatin',
          description: 'used along with a proper diet to help lower "bad" cholesterol and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) in the blood. It belongs to a group of drugs known as "statins." It works by reducing the amount of cholesterol made by the liver. Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks.',
          imageUrl: 'assets/medications/lipitor.jpg',
          strength: {
            amount: 10,
            measurement: 'mg'
          },
          form: 'tablet',
          instructions: 'take 1 tablet by mouth every day',
          status: 'active',
          createDate: moment().subtract(6, 'months').format(),
          createdBy: {
            id: 1,
            firstName: 'ilija',
            lastName: 'vrajich',
          },
          startDate: moment().subtract(6, 'months').format(),
          endDate: '',
          dosage: {
            amount: 1,
            form: 'tablet'
          },
          refills: 2
        }
      ]
    },
    {
      id: 2,
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
      ],
      medications: [
        {
          id: 1,
          brandName: 'lipitor',
          genericName: 'atorvastatin',
          description: 'used along with a proper diet to help lower "bad" cholesterol and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) in the blood. It belongs to a group of drugs known as "statins." It works by reducing the amount of cholesterol made by the liver. Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks.',
          instructions: 'take 1 tablet by mouth every day',
          createDate: moment().subtract(6, 'months').format(),
          createdBy: {
            id: 1,
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
          imageUrl: 'assets/medications/lipitor.jpg',
        }
      ]
    },
    {
      id: 3,
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
      ],
      medications: [
        {
          id: 1,
          brandName: 'lipitor',
          genericName: 'atorvastatin',
          description: 'used along with a proper diet to help lower "bad" cholesterol and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) in the blood. It belongs to a group of drugs known as "statins." It works by reducing the amount of cholesterol made by the liver. Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol decreases the risk of heart disease and helps prevent strokes and heart attacks.',
          instructions: 'take 1 tablet by mouth every day',
          createDate: moment().subtract(6, 'months').format(),
          createdBy: {
            id: 1,
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
          imageUrl: 'assets/medications/lipitor.jpg',
        }
      ]
    }

  ];

  currentResident$: BehaviorSubject<Resident>;


  // Behavior Subject of type resident array whose starting value is mockResidents
  private residents$$: BehaviorSubject<Resident[]> = new BehaviorSubject<Resident[]>(this.fakeResidents);
  residents$: Observable<Resident[]> = this.residents$$.asObservable();

  constructor(private http: HttpClient) {
    this.getResidents();
  }

  createResident(resident: Resident) {
    return this.http.post('api/residents', resident);
      // .map(this.extractData);
  };


  getResidents() {
    this.http.get('api/residents')
      // .map(this.extractData)
      .subscribe(
        residents => this.residents$$.next(this.fakeResidents),
        error => console.log('Error: ', error)
      );
      
  }

 /*  private extractData(res: HttpResponse<any>) {
    let body = res.json();
    console.log('Body: ', body);
    return body.data;
  } */

  private handleError(error) {
    // let errorMessage: string;
    console.log('The Error: ', error);
    // if (error instanceof Response) {
    //   const body = error.json();
    //   const err = body.
    // }
  }


}
