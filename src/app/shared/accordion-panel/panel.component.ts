import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '../../utils/coercion';

@Component({
  selector: 'panel',
  templateUrl: 'panel.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.opened]': 'isOpen'
  }
})

export class PanelComponent implements OnInit {

  @Input()
  get isOpen(): boolean { return this._isOpen; };
  set isOpen(val: boolean) { this._isOpen = coerceBooleanProperty(val); };
  private _isOpen = false;

  @Input() title: string;
  @Input() summary: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  //@HostBinding('class.opened') opened: boolean = this._isOpen;

  constructor() { }

  ngOnInit() { }

  expand() {
    this.toggle.emit();
  }
}
