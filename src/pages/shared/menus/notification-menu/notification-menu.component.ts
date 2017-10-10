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

  get notificationButtons() {
    return this._notificationButtons;
  }
  set notificationButtons(val) {
    if (val === 'alerts') {
      this.changeNotificationFilter('alert');
    } else if (val === 'reminders') {
      this.changeNotificationFilter('reminder');
    } else if (val === 'messages') {
      this.changeNotificationFilter('message');
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

 @ViewChild(Content) content: Content;
 @ViewChild(Header) header: Header;


  constructor(
    private ns: NotificationService,
  ) {}

  ngOnInit() {
    this.ns.unreadNotifications$.subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  ionViewDidLoad() {
    
  }

  ngAfterViewInit() {
  }

  changeNotificationFilter(filter: string){
    this.ns.notificationFilter$$.next(filter);
  }

  dismissAllNotifications() {
    this.ns.dismissAllNotifications();
  }



}
