import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PrnRecord } from '../../models/models';

@Component({
  selector: 'card-slider',
  template: `
    <ion-slides class="card-slides" (ionSlideDidChange)="changeActiveCardIndex()">
      <ion-slide *ngFor="let prn of prnRecords">
        <prn-card [prn]="prn"></prn-card>
      </ion-slide>
    </ion-slides>

    <div class="card-indicator-container">
      <span 
      [ngClass]="{'active': currentPrnCardIndex === i, 
                  'card-indicator': true,
                  'complete': prn.response}" 
      *ngFor="let prn of prnRecords; let i=index" tappable (click)="toSlide(i)">
      </span>
    </div>
  `
})
export class CardSliderComponent implements OnInit {

  currentPrnCardIndex: number = 0;
  slideCount: number;
  @ViewChild(Slides) slides: Slides;
  @Input() prnRecords: PrnRecord[];
  constructor() { }
  


  ngOnInit() {
   }

  changeActiveCardIndex() {
    this.currentPrnCardIndex = this.slides.getActiveIndex();
  }

  toSlide(index: number){
    this.slides.slideTo(index);
  }


}