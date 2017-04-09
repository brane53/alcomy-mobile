import { Directive, HostListener, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { QuickAddMenuPage } from '../../../pages/shared/popovers/quick-add-menu/quick-add-menu';

@Directive({
  selector: '[quickAdd]'
})
export class QuickAddDirective {

  constructor(private pop: PopoverController) {}

  @HostListener('click', ['$event'])
  presentQuickAdd(event) {
    let quickAddMenu = this.pop.create(QuickAddMenuPage);
    quickAddMenu.present({
      ev: event
    });
  }

}