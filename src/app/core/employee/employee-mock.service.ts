import { Injectable } from '@angular/core';
import { Employee } from '../../models/models';

@Injectable()
export class EmployeeMockService {

  employees: Employee[] = [
    {
      id: 1,
      firstName: 'ilija',
      lastName: 'vrajich',
      profileUrl: 'assets/avatars/ilija.jpg'
    },
    {
      id: 2,
      firstName: 'tommy',
      lastName: 'wells',
      profileUrl: 'assets/avatars/tommy.jpg'
    },
    {
      id: 3,
      firstName: 'ruth',
      lastName: 'vrajich',
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
  ];
  
  constructor() { }

  // GET /employees - Get all employees or filters set of employees
  public getEmployees(query?) {
    // will use this.http.get()
  }

  // GET /employees/:id - Get a single employee by their id
  public getEmployee(employeeId: number) {
    // will use this.http.get()
  }

  // POST /employees - Create a new employee
  public addEmployee(employee: Employee) {
    // will use this.http.post()
  }

  // POST /employees/:id - Create a new employee
  public updateEmployee(employeeId: number, employee: Employee) {
    // will use this.http.post()
  }

  // DELETE /employees/:id - Delete an employee (and all records. Should rarely be used if ever)
  public deleteEmployee(employeeId: number) {

  }



}