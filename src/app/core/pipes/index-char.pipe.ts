import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexChar'
})
export class IndexCharPipe implements PipeTransform {

  transform(value: number): unknown {
    return String.fromCharCode(value + 65);
  }

}
