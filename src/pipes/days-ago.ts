import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DaysAgo pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'days-ago',
})
export class DaysAgo implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
