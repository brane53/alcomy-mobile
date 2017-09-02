import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent implements OnInit {

  @ContentChildren

  constructor() { }

  ngOnInit() { }
}
