import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation,
         HostBinding, Optional, Host, forwardRef, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { coerceBooleanProperty } from '../../utils/coercion';
import { OnDestroy } from '@angular/core';

const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
  selector: 'panel',
  templateUrl: 'panel.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('expansion', [
      state('closed', style({height: '0px', display: 'none'})),
      state('opened', style({height: '*'})),
      transition('closed <=> opened', animate(EXPANSION_PANEL_ANIMATION_TIMING))
    ]),
    trigger('indicatorRotate', [
      state('closed', style({ transform: 'rotate(0deg)' })),
      state('opened', style({ transform: 'rotate(180deg)' })),
      transition('closed <=> opened', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
  ]
})

export class PanelComponent implements OnInit, OnDestroy {

  expansionState: string = 'closed';

  // @Input()
  // get isOpen(): boolean { return this._isOpen; };
  // set isOpen(val: boolean) { this._isOpen = coerceBooleanProperty(val); };
  // private _isOpen = false;

  @Input()
  get displayMode(): string { return this._displayMode; }
  set displayMode(val: string) { this._displayMode = val; }
  private _displayMode = 'default';

  @Input()
  get button(): boolean { return this._hasButton; }
  set button(val: boolean) { this._hasButton = coerceBooleanProperty(val); }
  private _hasButton = true;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

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

  constructor() {

  }

  ngOnInit() {
    console.log('Panel Init');
  }

  ngOnDestroy() {
    console.log('Panel Destroyed');
  }

  expand() {
    this.toggle.emit();
  }
}
