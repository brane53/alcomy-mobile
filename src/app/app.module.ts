import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { MyApp } from './app.component';

import { DashboardMedicationsPage } from '../pages/dashboard-medications/dashboard-medications';
import { DashboardWatchlistPage } from '../pages/dashboard-watchlist/dashboard-watchlist';
import { TasksPage } from '../pages/tasks/tasks';
import { DashboardTabsPage } from '../pages/dashboard-tabs/dashboard-tabs';

@NgModule({
  declarations: [
    MyApp,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    DashboardTabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CustomIconsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    DashboardTabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
