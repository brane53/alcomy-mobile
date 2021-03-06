import { Resident } from '../../models/models';
import * as moment from 'moment';

export let fakeResidents: Resident[] = [
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
        isEmergency: true,
        phoneNumbers: [
          {
            number: '333-333-3333',
            type: 'mobile',
            isPrimary: true
          },
          {
            number: '444-444-4444',
            type: 'home',
            isPrimary: false
          }
        ],
        email: 'jill@mail.com',
        addresses: [
          {
            line1: '222 Right Side Ln',
            city: 'Provo',
            stateOrProvice: 'UT',
            zipOrPostalCode: '84602',
            country: 'USA'
          }
        ]
      },
      {
        firstName: 'Jake',
        lastName: 'Kenworkth',
        relationship: 'Son-in-Law',
        isEmergency: true,
        phoneNumbers: [
          {
            number: '111-111-1111',
            type: 'mobile',
            isPrimary: true
          },
          {
            number: '222-222-2222',
            type: 'home',
            isPrimary: false
          }
        ],
        email: 'jake@mail.com',
        addresses: [
          {
            line1: '222 Right Side Ln',
            city: 'Provo',
            stateOrProvice: 'UT',
            zipOrPostalCode: '84602',
            country: 'USA'
          }
        ]
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
        description: `used along with a proper diet to help lower "bad" cholesterol
           and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) 
           in the blood. It belongs to a group of drugs known as "statins." 
           It works by reducing the amount of cholesterol made by the liver. 
           Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol 
           decreases the risk of heart disease and helps prevent strokes and heart attacks.`,
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
        isEmergency: true,
        phoneNumbers: [
          {
            number: '555-555-5555',
            type: 'mobile',
            isPrimary: true
          }
        ],
        email: 'sky@mail.com',
        addresses: [
          {
            line1: '333 Left Side Ln',
            city: 'Provo',
            stateOrProvice: 'UT',
            zipOrPostalCode: '84602',
            country: 'USA'
          }
        ]
      }
    ],
    medications: [
      {
        id: 1,
        brandName: 'lipitor',
        genericName: 'atorvastatin',
        description: `used along with a proper diet to help lower "bad" cholesterol
            and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) 
            in the blood. It belongs to a group of drugs known as "statins." 
            It works by reducing the amount of cholesterol made by the liver. 
            Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol 
            decreases the risk of heart disease and helps prevent strokes and heart attacks.`,
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
        isEmergency: true,
        phoneNumbers: [
          {
            number: '666-666-6666',
            type: 'mobile',
            isPrimary: true
          }
        ],
        email: 'sky@mail.com',
        addresses: [
          {
            line1: '444 Front Side Ln',
            city: 'Provo',
            stateOrProvice: 'UT',
            zipOrPostalCode: '84602',
            country: 'USA'
          }
        ]
      }
    ],
    medications: [
      {
        id: 1,
        brandName: 'lipitor',
        genericName: 'atorvastatin',
        description: `used along with a proper diet to help lower "bad" cholesterol
            and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) 
            in the blood. It belongs to a group of drugs known as "statins." 
            It works by reducing the amount of cholesterol made by the liver. 
            Lowering "bad" cholesterol and triglycerides and raising "good" cholesterol 
            decreases the risk of heart disease and helps prevent strokes and heart attacks.`,
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