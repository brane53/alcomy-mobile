import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomIconsModule } from 'ionic2-custom-icons';
import { MyApp } from './app.component';

import { DashboardTabsPage } from '../pages/dashboard-tabs/dashboard-tabs';
import { TasksPage } from '../pages/tasks/tasks';
import { DashboardMedicationsPage } from '../pages/dashboard-medications/dashboard-medications';
import { DashboardWatchlistPage } from '../pages/dashboard-watchlist/dashboard-watchlist';

import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';

// Forms
import { NewTaskPage } from '../pages/new-task/new-task';

// Popover Pages
import { QuickAddMenuPage } from '../pages/popovers/quick-add-menu/quick-add-menu';


@NgModule({
  declarations: [
    MyApp,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    TasksPage,
    DashboardTabsPage,
    ResidentsTabsPage,
    NewTaskPage,
    QuickAddMenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      iconMode: 'md'
    }),
    CustomIconsModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardTabsPage,
    TasksPage,
    DashboardMedicationsPage,
    DashboardWatchlistPage,
    ResidentsTabsPage,
    NewTaskPage,
    QuickAddMenuPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
