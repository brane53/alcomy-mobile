import { Component, OnInit, OnDestroy, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';
import { coerceBooleanProperty } from '../../utils/coercion';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent implements OnInit, AfterContentInit, OnDestroy {
  // open strategy can be single or multiple. default: multiple
  // indicates how many panels can be open at once.
  @Input() get multi(): boolean { return this._multi; };
  set multi(val: boolean) { this._multi = coerceBooleanProperty(val); };
  private _multi = true;

  @ContentChildren(AccordionPanelComponent) panels: QueryList<AccordionPanelComponent>;

  constructor() { }

  ngAfterContentInit() {
    
    this.panels.toArray().forEach(
      (panel: AccordionPanelComponent) => {
        // subscribe to the toggle event of every panel
        panel.toggle.subscribe(() => {
          if (this.multi === true) {
            panel.isOpen = !panel.isOpen;
          } else {
            if (panel.isOpen) {
              panel.isOpen = !panel.isOpen;
            } else {
              this.panels.toArray().forEach(p => p.isOpen = false);
              panel.isOpen = true;
            }
          }
        });

        panel.isOpen = false;
      }
    );
  }

  ngOnDestroy() {
    this.panels.toArray().forEach(
      (panel: AccordionPanelComponent) => {
        // unsubscribe from the toggle event of every panel
        panel.toggle.unsubscribe();
      }
    );
  }

  ngOnInit() { }


}
