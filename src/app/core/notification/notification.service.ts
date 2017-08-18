import { Injectable } from '@angular/core';
import { Notification } from '../../models/models';

@Injectable()
export class NotificationService {

  notifications: Notification[];

  constructor() {

  }
}
