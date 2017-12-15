import { NgModule } from '@angular/core';
import { APP_CONFIG } from './environments.token';
import { devVariables } from './development';
import { prodVariables } from './production';
// import { qaVariables } from './qa';

declare const process: any; // Typescript compiler will complain without this

export function environmentFactory() {
  return process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
}

@NgModule({
  providers: [
    {
      provide: APP_CONFIG,
      // useFactory instead of useValue so we can easily add more logic as needed.
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule { }