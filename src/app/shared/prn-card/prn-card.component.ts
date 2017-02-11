import { Component, OnInit, Input } from '@angular/core';
import { PrnMedication } from '../../models/models';

@Component({
  selector: 'prn-card',
  templateUrl: 'prn-card.component.html'
})
export class PrnCardComponent implements OnInit {

  @Input() medication: PrnMedication;
  constructor() { }

  ngOnInit() { }

}