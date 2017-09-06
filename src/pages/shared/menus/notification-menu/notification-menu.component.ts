import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NotificationService } from '../../../../app/core/notification/notification.service';
import { Notification } from '../../../../app/models/models';
import { Content } from 'ionic-angular';

@Component({
  selector: 'notification-menu',
  templateUrl: 'notification-menu.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class NotificationMenuPage implements OnInit, AfterViewInit {

  notificationButtons = 'all';
  isExpanded = false;
  notifications: Notification[];

 @ViewChild(Content) content: Content;

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
