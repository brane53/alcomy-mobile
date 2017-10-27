import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NotificationService } from '../../../../app/core/notification/notification.service';
import { Notification } from '../../../../app/models/models';
import { Content, Header } from 'ionic-angular';

@Component({
  selector: 'notification-menu',
  templateUrl: 'notification-menu.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class NotificationMenuPage implements OnInit, AfterViewInit {

  get notificationButtons() { return this._notificationButtons; }
  set notificationButtons(val) {
    if (val === 'alerts') {
      this.filter = 'alert';
    } else if (val === 'reminders') {
      this.filter = 'reminder';
    } else if (val === 'messages') {
      this.filter = 'message';
    }
    this._notificationButtons = val;
  }
  _notificationButtons = 'all';

  notifications: Notification[];

  notificationIcons = {
    watchlist: 'remove_red_eye',
    medications: 'local_pharmacy'
  };

  iconColors = {
    alert: 'notification-alert',
    reminder: 'notification-reminder',
    message: 'notification-message'
  };

  filter: string = '';
  alertCount: number = 0;
  reminderCount: number = 0;
  messageCount: number = 0;
  totalCount: number;

//  @ViewChild(Content) content: Content;
//  @ViewChild(Header) header: Header;


  constructor(
    private ns: NotificationService,
  ) {}

  ngOnInit() {
    this.ns.unreadNotifications$.map(notifications => {
      this.alertCount = 0;
      this.reminderCount = 0;
      this.messageCount = 0;
      
      
      notifications.forEach(n => {
        if(n.type === 'alert') {
          this.alertCount++;
        } else if (n.type === 'reminder') {
          this.reminderCount++;
        } else if (n.type === 'message') {
          this.messageCount++;
        }
      });

      this.totalCount = this.alertCount + this.reminderCount + this.messageCount;
      
      return notifications;
    }).subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  ionViewDidLoad() {
  }

  ngAfterViewInit() {
  }

  dismissAllNotifications() {
    this.ns.dismissAllNotifications();
  }



}
