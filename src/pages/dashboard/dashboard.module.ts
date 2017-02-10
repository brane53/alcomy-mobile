import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';

import { DashboardTabsPage } from './dashboard-tabs/dashboard-tabs';
import { TasksPage } from './tasks/tasks';
import { DashboardMedicationsPage } from './dashboard-medications/dashboard-medications';
import { DashboardWatchlistPage } from './dashboard-watchlist/dashboard-watchlist';





@NgModule({
  imports: [
    IonicModule,
    SharedModule
  ],
  exports: [
    DashboardTabsPage,
    TasksPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage
  ],
  declarations: [
    DashboardTabsPage,
    TasksPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage
  ],
  entryComponents: [
    DashboardTabsPage,
    TasksPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage
  ],
  providers: []
})
export class DashboardModule { }
