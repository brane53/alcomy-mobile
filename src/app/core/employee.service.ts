import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { Employee } from '../models/models';

@Injectable()
export class EmployeeService {
  constructor(private af: AngularFire) {

  }

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