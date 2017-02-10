import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';

import { ResidentsTabsPage } from './residents-tabs/residents-tabs';
import { ResidentsGroupsPage } from './residents-groups/residents-groups';
import { ResidentsListPage } from './residents-list/residents-list';






@NgModule({
  imports: [
    IonicModule,
    SharedModule
  ],
  exports: [
    ResidentsTabsPage,
    ResidentsGroupsPage,
    ResidentsListPage
  ],
  declarations: [
    ResidentsTabsPage,
    ResidentsGroupsPage,
    ResidentsListPage
  ],
  entryComponents: [
    ResidentsTabsPage,
    ResidentsGroupsPage,
    ResidentsListPage
  ],
  providers: [

  ],
})
export class ResidentsModule { }
