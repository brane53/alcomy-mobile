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
  // @Input() iconSet: string = 'mdIcons';
  // @Input() iconName: string;
  // @Input() iconColor: string;
  @Input()
  get button(): boolean {
    return this._hasButton;
  }
  set button(val: boolean) {
    this._hasButton = coerceBooleanProperty(val);
  }
  private _hasButton = true;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.opened') get opened(): boolean {
    if (this.isOpen) {
      return true;
    }
    return false;
  } ;

  @HostBinding('class.gutter') get gutter(): boolean {
    if (this.displayMode === 'default') {
      return true;
    }
    return false;
  };

  @HostBinding('class.flat') get flat(): boolean {
    if (this.displayMode === 'flat') {
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
