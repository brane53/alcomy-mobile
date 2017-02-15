import { Directive, HostListener, Input } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Directive({
  selector: '[menuButtonToggle]'
})
export class MenuButtonToggleDirective {

    /**
   * @private
   */
  @Input() menuButtonToggle: string;

  constructor(private menu: MenuController) {}

  @HostListener('click')
  toggle() {
    let menu = this.menu.get(this.menuButtonToggle);
    menu && menu.toggle();
  }

}