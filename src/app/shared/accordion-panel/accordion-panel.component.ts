import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordion-panel',
  templateUrl: 'accordion-panel.component.html'
})

export class AccordionPanelComponent implements OnInit {

  @Input() isOpen = false;
  @Input() title: string;
  @Input() summary: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  expand() {
    this.toggle.emit();
  }
}
