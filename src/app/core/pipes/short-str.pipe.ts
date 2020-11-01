import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortStr'
})
export class ShortStrPipe implements PipeTransform {

  transform(value: string, len: number = 20): string {
    return value.length > len ? value.substring(0, len) + '...' : value;
  }

}
