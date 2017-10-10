import { Injectable } from '@angular/core';
import { Notification } from '../../models/models';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';




export const notificationIconLookup = {
  watchlist: 'remove_red_eye',
  medications: 'local_pharmacy'
};


@Injectable()
export class NotificationMockService {

  fakeNotifications: Notification[] = [
    {
      id: 1,
      type: 'alert',
      source: 'watchlist',
      event: 'ITEM_CREATE',
      dismissed: false,
      data: {
        title: 'Skin Tear',
        summary: 'Created for Justin Kunz by Ilija Vrajich',
        createdBy: 'Ilija Vrajich',
        createdFor: 'Brane Vrajich',
        createdAt: moment().subtract(30, 'minutes').format(),
        images: ['assets/watchlist/skin_tear.jpg'],
        notes: ''
      }
    },
    {
      id: 2,
      type: 'alert',
      source: 'watchlist',
      event: 'BM',
      dismissed: false,
      data: {
        title: 'Bowel Movement',
        summary: '3 days since BM for Brane Vrajich',
        createdFor: 'Brane Vrajich',
        createdAt: moment().subtract(40, 'minutes').format(),
        lastBM: moment().subtract(4, 'days').format()
      }
    },
    {
      id: 3,
      type: 'reminder',
      source: 'medications',
      event: 'ORDER_MEDICATION',
      dismissed: false,
      data: {
        title: 'Order Medication',
        summary: '3 medicaitons need to be ordered',
        createdFor: 'Brane Vrajich',
        createdAt: moment().subtract(2, 'hours').format()
      }
    }
  ];

  notifications$$: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>(this.fakeNotifications);
  notifications$: Observable<Notification[]> = this.notifications$$.asObservable();
  notificationFilter$$: BehaviorSubject<string> = new BehaviorSubject<string>('all');

  unreadNotifications$: Observable<Notification[]> = this.notificationFilter$$.map(val => {
    return this.fakeNotifications.filter(n => {
        return n.dismissed !== true;
    })
    .filter((n) => {
      if (val === 'alert' || val === 'reminder' || val === 'message') {
        return n.type === val;
      }
      return n;
    });
  });



  constructor(private http: HttpClient) {
    this.getNotifications();
  }

  getNotifications() {
    this.notifications$$.next(this.fakeNotifications);
  }

  dismissAllNotifications(){
    this.fakeNotifications.forEach(n => {
      n.dismissed = true;
    });
    this.getNotifications();
  }
}
