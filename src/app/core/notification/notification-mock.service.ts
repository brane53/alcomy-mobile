import { Injectable } from '@angular/core';
import { Notification } from '../../models/models';
import * as moment from 'moment';




export const notificationIconLookup = {
  watchlist: 'remove_red_eye',
  medications: 'local_pharmacy'
};


@Injectable()
export class NotificationMockService {

  notifications: Notification[] = [
    {
      id: 1,
      type: 'alert',
      source: 'watchlist',
      event: 'ITEM_CREATE',
      dismissed: false,
      data: {
        title: 'Skin Tear',
        summary: 'This is some text to represent a skin tear',
        createdBy: 'Ilija Vrajich',
        createdFor: 'Brane Vrajich',
        createdOn: moment().subtract(30, 'minutes').format(),
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
        summary: 'It\'s been 3 days since Brane Vrajich has had a bowel movement',
        createdFor: 'Brane Vrajich',
        createdOn: moment().subtract(40, 'minutes').format(),
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
        summary: 'Medication needs to be ordered',
        createdFor: 'Brane Vrajich',
        createdOn: moment().subtract(2, 'hours').format()
      }
    }
  ];



  constructor() { }
}
