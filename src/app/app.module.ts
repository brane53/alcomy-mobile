import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { MyApp } from './app.component';
import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { DashboardMedicationsPage } from '../pages/dashboard/dashboard-medications/dashboard-medications';
import { DashboardWatchlistPage } from '../pages/dashboard/dashboard-watchlist/dashboard-watchlist';
import { TasksPage } from '../pages/dashboard/tasks/tasks';
import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';
import { ResidentsListPage } from '../pages/residents/residents-list/residents-list';
import { ResidentsGroupsPage } from '../pages/residents/residents-groups/residents-groups';
import { NewTaskPage } from '../pages/shared/forms/new-task/new-task';
import { NewWatchItemPage } from '../pages/shared/forms/new-watch-item/new-watch-item';
import { QuickAddMenuPage } from '../pages/shared/popovers/quick-add-menu/quick-add-menu';




@NgModule({
  imports: [
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
    QuickAddMenuPage
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
    QuickAddMenuPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp]
})
export class AppModule {}
