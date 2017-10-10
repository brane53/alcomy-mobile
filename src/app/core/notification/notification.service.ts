import { Injectable } from '@angular/core';
import { Notification } from '../../models/models';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {

  notifications$: Observable<Notification[]>;
  notificationFilter$$: BehaviorSubject<string>;
  unreadNotifications$: Observable<Notification[]>;


  constructor() {

  }

  dismissAllNotifications() {}
}
