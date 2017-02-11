import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';

import { MyApp } from './app.component';
// Dashboard Pages
import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';'../pages/dashboard/dashboard-medication-tabs/dashboard-medication-tabs';
import { DashboardMedicationsPage } from '../pages/dashboard/dashboard-medications/dashboard-medications';
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




@NgModule({
  imports: [
    FormsModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'md'
    }),

    CustomIconsModule
    
  ],
  declarations: [
    MyApp,
    DashboardTabsPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    ResidentsTabsPage,
    ResidentsListPage,
    ResidentsGroupsPage,
    NewTaskPage,
    NewWatchItemPage,
    QuickAddMenuPage,
    PrnResponsePage
  ],
  entryComponents: [
    MyApp,
    DashboardTabsPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    ResidentsTabsPage,
    ResidentsListPage,
    ResidentsGroupsPage,
    NewTaskPage,
    NewWatchItemPage,
    QuickAddMenuPage,
    PrnResponsePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp]
})
export class AppModule {}
