import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { MyApp } from './app.component';

import { DashboardTabsPage } from '../pages/dashboard-tabs/dashboard-tabs';
import { TasksPage } from '../pages/tasks/tasks';
import { DashboardMedicationsPage } from '../pages/dashboard-medications/dashboard-medications';
import { DashboardWatchlistPage } from '../pages/dashboard-watchlist/dashboard-watchlist';

import { ResidentsTabsPage } from '../pages/residents-tabs/residents-tabs';
import { NewTaskModalPage } from '../pages/new-task-modal/new-task-modal';




@NgModule({
  declarations: [
    MyApp,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    DashboardTabsPage,
    ResidentsTabsPage,
    NewTaskModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      iconMode: 'md'
    }),
    CustomIconsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardTabsPage,
    TasksPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    ResidentsTabsPage,
    NewTaskModalPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
