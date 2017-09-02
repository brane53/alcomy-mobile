import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'accordion-panel',
  templateUrl: 'accordion-panel.component.html'
})

export class AccordionPanelComponent implements OnInit {

  @Input() isOpen = false;
  @Input() title: string;
  @Input() summary: string

  constructor() { }

  ngOnInit() { }
}