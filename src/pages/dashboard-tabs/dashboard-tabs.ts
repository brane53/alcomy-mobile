import { Component } from '@angular/core';

import { TasksPage } from '../tasks/tasks';
import { DashboardMedicationsPage } from '../dashboard-medications/dashboard-medications';
import { DashboardWatchlistPage } from '../dashboard-watchlist/dashboard-watchlist';

@Component({
  templateUrl: 'dashboard-tabs.html'
})
export class DashboardTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TasksPage;
  tab2Root: any = DashboardMedicationsPage;
  tab3Root: any = DashboardWatchlistPage;

  constructor() {

  }
}
