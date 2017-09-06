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

  notificationButtons = 'all';
  isExpanded = false;
  notifications: Notification[];
  headerHeight: number;

 @ViewChild(Content) content: Content;
 @ViewChild(Header) header: Header;


  constructor(
    private ns: NotificationService,
  ) {}

  ngOnInit() {
    this.notifications = this.ns.notifications;
  }

  ngAfterViewInit() {
    this.headerHeight = this.header.getElementRef().nativeElement.clientHeight;
    console.log(`Header Height: ${this.headerHeight}`);
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
