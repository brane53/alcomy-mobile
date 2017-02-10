import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { NewTaskPage } from './forms/new-task/new-task';
import { NewWatchItemPage } from './forms/new-watch-item/new-watch-item';
import { QuickAddMenuPage } from './popovers/quick-add-menu/quick-add-menu';



@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    NewTaskPage,
    NewWatchItemPage,
    QuickAddMenuPage
  ],
  declarations: [
    NewTaskPage,
    NewWatchItemPage,
    QuickAddMenuPage
  ],
  entryComponents: [
    NewTaskPage,
    NewWatchItemPage,
    QuickAddMenuPage
  ],
  providers: [

  ],
})
export class SharedModule{}
