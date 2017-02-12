import { Component, OnInit, Input } from '@angular/core';
import { PrnRecord } from '../../models/models';

@Component({
  selector: 'prn-card',
  templateUrl: 'prn-card.component.html'
})
export class PrnCardComponent implements OnInit {

  @Input() prn: PrnRecord;
  constructor() { }

  ngOnInit() { }

}