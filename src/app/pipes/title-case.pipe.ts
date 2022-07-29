import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(
      /\w\S*/g,
      function (value) {
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
      }
    );
  }

}
