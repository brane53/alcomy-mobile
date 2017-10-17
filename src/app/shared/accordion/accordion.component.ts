import { Component, OnInit, OnDestroy, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { PanelComponent } from '../accordion-panel/panel.component';
import { coerceBooleanProperty } from '../../utils/coercion';

export type AccordionDisplayMode = 'default' | 'flat';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.component.html'
})
export class AccordionComponent implements OnInit, AfterContentInit, OnDestroy {
  // indicates how many panels can be open at once.
  // when multi = true multiple panels can be open at the same time.
  // when multi = false only a single panel can be open at any given time.
  @Input()
  get multi(): boolean { return this._multi; };
  set multi(val: boolean) { this._multi = coerceBooleanProperty(val); };
  private _multi = true;

  // displayMode determines the elevation of the panel body. There are two modes:
  //   default: creates a gutter style panel where the panel body is at a lower level than the panel header.
  //   flat: creates a flat style panel where the panel body is at the same level as the panel header.
  // The default is 'default' obviously
  @Input() displayMode: AccordionDisplayMode;

  @ContentChildren(PanelComponent) panels: QueryList<PanelComponent>;

  constructor() { }

  ngAfterContentInit() {

    this.panels.toArray().forEach(
      (panel: PanelComponent) => {
        // subscribe to the toggle event of every panel
        panel.toggle.subscribe(() => {
          // if multi is set to true then the panel will be
          // toggled without affecting the other panels
          if (this.multi === true) {
            panel.isOpen = !panel.isOpen;
          } else {
            // if multi is set to false then opening one panel
            // with close the rest, but closing said panel will
            // do so with opening other panels
            if (panel.isOpen) {
              panel.isOpen = !panel.isOpen;
            } else {
              this.panels.toArray().forEach(p => p.isOpen = false);
              panel.isOpen = true;
            }
          }
        });

        panel.isOpen = false;
        
        panel.displayMode = this.displayMode;
        console.log(`Accordion displayMode: ${this.displayMode}`);
      }
    );
  }

  ngOnDestroy() {
    this.panels.toArray().forEach(
      (panel: PanelComponent) => {
        // unsubscribe from the toggle event of every panel
        panel.toggle.unsubscribe();
      }
    );
    console.log('Accordion Destroy');
  }

  ngOnInit() { console.log('Accordion Init'); }


}
