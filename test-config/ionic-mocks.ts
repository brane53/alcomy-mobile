/* tslint:disable */

// IONIC:

import { EventEmitter } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export class AlertMock {

  public create(): any {
    let rtn: Object = {};
    rtn['present'] = (() => true);
    return rtn;
  }

  // function actually on the AlertClass (not AlertController), but using these interchangably for now

  public dismiss(): Promise<{}> {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }
}

export class ToastMock {

  public create(): any {
    let rtn: Object = {};
    rtn['present'] = (() => true);
    return rtn;
  }
}

export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }



  public setTransition(): void {
    return;
  }

  public setModeConfig(): void {
    return;
  }
}

export class FormMock {
  public register(): any {
    return true;
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }

  public popToRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return;
  }
}

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }



  public win(): Window {
    return window;
  }



  public raf(callback: any): number {
    return 1;
  }



  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }



  public cancelTimeout(id: any) {
    // do nothing
  }



  public getActiveElement(): any {
    return document['activeElement'];
  }

  public getQueryParam(): any {
    return true;
  }

  public platforms(): any {

  }
}



export class StorageMock {

  public get(key: string): Promise<{}> {
    return new Promise((resolve: Function) => {
      resolve({});
    });
  }

  public set(key: string, value: string): Promise<{}> {
    return new Promise((resolve: Function) => {
      resolve({ key: key, value: value });
    });
  }

  public remove(key: string): Promise<{}> {
    return new Promise((resolve: Function) => {
      resolve({ key: key });
    });
  }

  public query(): Promise<{ res: { rows: Array<{}> } }> {
    return new Promise((resolve) => {
      resolve({
        res: {
          rows: [{}]
        }
      });
    });
  }
}

export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class ModalMock {
  public create(){
    return true;
  }
}

export class AppMock {
  public getActiveNav(): NavMock {
    return new NavMock();
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class DeepLinkerMock {

}

/* tslint:enable */