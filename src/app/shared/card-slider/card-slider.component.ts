import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { PrnRecord } from '../../models/models';

@Component({
  selector: 'card-slider',
  templateUrl: 'card-slider.component.html'
})
export class CardSliderComponent implements OnInit, AfterContentInit, AfterViewInit {

  currentPrnCardIndex: number;
  slideCount: number;
  @ViewChild(Slides) slides: Slides;
  @Input() prnRecords: PrnRecord[];
  constructor() { }
  


  ngOnInit() {
   }

  ngAfterContentInit(){
  }

  ngAfterViewInit(){
    //this.slideCount = this.slides.length();
    this.currentPrnCardIndex = this.slides.getActiveIndex();


  }

  changeActiveCardIndex() {
    this.currentPrnCardIndex = this.slides.getActiveIndex();
  }


}