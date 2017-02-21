export class Task {
  id: string;
  description: string;
  isComplete: boolean;
  time?: string;

  constructor(description: string, isComplete: boolean = false) {
    this.description = description;
    this.isComplete = isComplete;
    
  }

}

export class Resident {
  id?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate?: string;
  ssn?: string;
  gender?: string;
  code?: string;
  isAmbulatory?: boolean;
  isVerbal?: boolean;
  religion?: string;
  profileUrl?: string;
  medications?: Medication[] | number;
  
}

export class PrnRecord {
  id?: string;
  medication: Medication;
  reasonGiven: string;
  givenAt: string;
  givenBy: Employee;
  followUpDateTime: string;
  response?: string;
  responseNotes?: string;
}

export class Medication {
  id?: string;
  brandName: string;
  genericName: string;
  description?: string;
  instructions?: string;
  strength?: {amount: string; measurement: string;};
  form?: string
  
}

export class MedicationPrescription {
  id?: string;
  resident: Resident;
  prescriber: Specialist;
  medication: Medication;
  dosage: Dosage;
  routeOfAdministration
  schedule
  instructions
}

export class Dosage {
  amount: number;
  measurement?: string;
  form?: string

}

export class Specialist {

}

export class Employee {
  id?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate?: Date;
  profileUrl?: string;


}

export class Permission {
  id: string;
  title: string;
  code: string
}

export class User {
  id?: string;
  firstName: string;
  lastName: string;
  permissions?: Permission[];
  notifications?: Notification[]
}

export class Notification {
  id?: string;
  type: string;
  source: string;
  event: string;
  dismissed: boolean;
  data: Object;
}