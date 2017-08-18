import { Component, OnInit, Input } from '@angular/core';
import { PrnRecord } from '../../models/models';
import { PrnResponseFormPage } from '../../../pages/shared/forms/prn-response/prn-response';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'prn-card',
  templateUrl: './prn-card.component.html'
})
export class PrnCardComponent implements OnInit {

  @Input() prn: PrnRecord;
  constructor(private modal: ModalController) { }

  ngOnInit() { }

  presentPrnResponse() {
    let modal = this.modal.create(PrnResponseFormPage);
    modal.present();
  }

}
