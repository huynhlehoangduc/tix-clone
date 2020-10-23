import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date();
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);

    if (date.toLocaleDateString('vi') === value) {
      return 'Hôm nay';
    } else if (nextDate.toLocaleDateString('vi') === value) {
      return 'Ngày mai';
    }

    return value;
  }

}
