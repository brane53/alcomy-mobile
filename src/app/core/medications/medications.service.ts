import { Injectable } from '@angular/core';
import { PrnRecord } from '../../models/models';

@Injectable()
export class MedicationsService {

  prnRecords: PrnRecord[];

  constructor() {

  }
}
