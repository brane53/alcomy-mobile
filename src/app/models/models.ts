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
  profileUrl?: string;
  medications?: any[];
  
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

}

export class Employee {
  id?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate?: Date;
  profileUrl?: string;


}