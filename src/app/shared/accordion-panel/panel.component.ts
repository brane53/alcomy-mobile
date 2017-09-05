import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation,
         HostBinding } from '@angular/core';
import { coerceBooleanProperty } from '../../utils/coercion';

@Component({
  selector: 'panel',
  templateUrl: 'panel.component.html',
  encapsulation: ViewEncapsulation.None
})

export class PanelComponent implements OnInit {

  @Input()
  get isOpen(): boolean { return this._isOpen; };
  set isOpen(val: boolean) { this._isOpen = coerceBooleanProperty(val); };
  private _isOpen = false;

  @Input() displayMode = 'default';

  @Input() title: string;
  @Input() summary: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.opened') opened = this._isOpen;

  @HostBinding('class.gutter') get gutter(): boolean {
    if (this.displayMode === 'default') {
      console.log(`DisplayMode: ${this.displayMode}`);
      console.log('default true');
      return true;
    }
    return false;
  };

  @HostBinding('class.flat') get flat(): boolean {
    if (this.displayMode === 'flat') {
      console.log(`DisplayMode: ${this.displayMode}`);
      console.log('flat true');
      return true;
    }
    return false;
  };

  constructor() { }

  ngOnInit() { }

  expand() {
    this.toggle.emit();
  }
}
