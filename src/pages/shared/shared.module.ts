import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { NewTaskFormPage } from './forms/new-task/new-task';
import { NewWatchItemFormPage } from './forms/new-watch-item/new-watch-item';
import { QuickAddMenuPage } from './popovers/quick-add-menu/quick-add-menu';



@NgModule({
  imports: [
    IonicModule
  ],
  exports: [
    NewTaskFormPage,
    NewWatchItemFormPage,
    QuickAddMenuPage
  ],
  declarations: [
    NewTaskFormPage,
    NewWatchItemFormPage,
    QuickAddMenuPage
  ],
  entryComponents: [
    NewTaskFormPage,
    NewWatchItemFormPage,
    QuickAddMenuPage
  ],
  providers: [

  ],
})
export class SharedModule{}
