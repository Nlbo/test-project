import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFromObjectKey'
})
export class ArrayFromObjectKeyPipe implements PipeTransform {

  transform(value: any[], key): any[] {
    return value.map(item => item[key]);
  }

}
