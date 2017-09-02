import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../app/core/notification/notification.service';
import { Notification } from '../../../../app/models/models';

@Component({
  selector: 'notification-menu',
  templateUrl: 'notification-menu.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class NotificationMenuPage implements OnInit {

  notificationButtons = 'all';
  isExpanded = false;
  notifications: Notification[];

  constructor(
    private ns: NotificationService,
  ) {}

  ngOnInit() {
    this.notifications = this.ns.notifications;

  }

  ionViewDidLoad() {
  }

  expand() {
    if (this.isExpanded) {
      this.isExpanded = false;
      return;
    }
    this.isExpanded = true;
  }

}
