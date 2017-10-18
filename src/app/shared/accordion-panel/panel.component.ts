import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation,
         HostBinding, Optional, Host, forwardRef, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '../../utils/coercion';
import { ContentChildren, OnDestroy } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { Subscription } from 'rxjs/Subscription';
import {} from 'rxjs'

@Component({
  selector: 'panel',
  templateUrl: 'panel.component.html',
  encapsulation: ViewEncapsulation.None
})

export class PanelComponent implements OnInit, OnDestroy {

  parentChangeSubscription = Subscription.EMPTY;

  @Input()
  get isOpen(): boolean { return this._isOpen; };
  set isOpen(val: boolean) { this._isOpen = coerceBooleanProperty(val); };
  private _isOpen = false;

  @Input() displayMode;

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
      console.log(`Default True: ${this.displayMode}`);
      return true;

    }
    console.log(`Default False: ${this.displayMode}`);
    return false;
  };

  @HostBinding('class.flat') get flat(): boolean {
    if (this.displayMode === 'flat') {
      console.log(`Flat True: ${this.displayMode}`);
      return true;
    }
    console.log(`Flat False: ${this.displayMode}`);
    return false;
  };

  constructor(
    //@Optional() @Host() public accordion: AccordionComponent,
    //public changeDetectorRef: ChangeDetectorRef
    ) {
      
      // this.parentChangeSubscription = accordion.inputChanges.subscribe(() => {
      //   this.changeDetectorRef.markForCheck();
      // });

    }

  ngOnInit() {
    console.log('Panel Init');
  }

  ngOnDestroy() {
    console.log('Panel Destroyed');
    //this.parentChangeSubscription.unsubscribe();
  }

  expand() {
    this.toggle.emit();
  }
}
