import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
// Dashboard Pages
import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';'../pages/dashboard/dashboard-medication-tabs/dashboard-medication-tabs';
import { DashboardMedicationsPage } from '../pages/dashboard/dashboard-medications/dashboard-medications';
import { PassMedicationsPage } from '../pages/dashboard/pass-medications/pass-medications';
import { DashboardWatchlistPage } from '../pages/dashboard/dashboard-watchlist/dashboard-watchlist';
import { TasksPage } from '../pages/dashboard/tasks/tasks';
// Residents Pages
import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';
import { ResidentsListPage } from '../pages/residents/residents-list/residents-list';
import { ResidentsGroupsPage } from '../pages/residents/residents-groups/residents-groups';
// Forms Pages
import { NewTaskPage } from '../pages/shared/forms/new-task/new-task';
import { NewWatchItemPage } from '../pages/shared/forms/new-watch-item/new-watch-item';
// Popover Pages
import { QuickAddMenuPage } from '../pages/shared/popovers/quick-add-menu/quick-add-menu';
import { PrnResponsePage } from '../pages/shared/forms/prn-response/prn-response';
import { PrnCardComponent } from './shared/prn-card/prn-card.component';
import { WatchItemDetailPage } from '../pages/dashboard/watch-item-detail/watch-item-detail';
import { MenuButtonToggleDirective } from './shared/menu-button-toggle/menu-button-toggle.directive';
import { QuickAddDirective } from './shared/quick-add/quick-add.directive';
import { StaffTabsPage } from '../pages/staff/staff-tabs/staff-tabs';
import { StaffListPage } from '../pages/staff/staff-list/staff-list';
import { StaffGroupsPage } from '../pages/staff/staff-groups/staff-groups';
import { MockResidentsService } from './core/residents-mock.service';
import { MockMedicationsService } from './core/medications-mock.service';
import { MockNotificationService } from './core/notification-mock.service';
import { MockEmployeeService } from './core/employee-mock.service';




@NgModule({
  imports: [
  FormsModule,
  IonicModule.forRoot(MyApp, {
    iconMode: 'md'
  }),
  MomentModule,
  CustomIconsModule
  
  ],
  declarations: [
  MyApp,
  // Pages
  DashboardTabsPage,
  DashboardMedicationsPage,
  DashboardWatchlistPage,
  PassMedicationsPage,
  TasksPage,
  ResidentsTabsPage,
  ResidentsListPage,
  ResidentsGroupsPage,
  NewTaskPage,
  NewWatchItemPage,
  QuickAddMenuPage,
  PrnResponsePage,
  WatchItemDetailPage,
  StaffTabsPage,
  StaffListPage,
  StaffGroupsPage,
  // Components
  PrnCardComponent,
  // Directives
  MenuButtonToggleDirective,
  QuickAddDirective
  ],
  entryComponents: [
  MyApp,
  DashboardTabsPage,
  DashboardMedicationsPage,
  PassMedicationsPage,
  DashboardWatchlistPage,
  TasksPage,
  ResidentsTabsPage,
  ResidentsListPage,
  ResidentsGroupsPage,
  NewTaskPage,
  NewWatchItemPage,
  QuickAddMenuPage,
  PrnResponsePage,
  WatchItemDetailPage,
  StaffTabsPage,
  StaffListPage,
  StaffGroupsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MockResidentsService,
    MockMedicationsService,
    MockNotificationService,
    MockEmployeeService
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
