import { Pipe, PipeTransform } from '@angular/core'

export class YesNoPipe implements PipeTransform {
  transform(value: boolean){
    if(typeof value !== 'boolean'){
      return value;
    }

    if(value === true){
      return 'Yes';
    }
    else if (value === false){
      return 'No';
    }
  }
}