import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainCheckFlagPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainCheckFlag',
})
export class ExplainCheckFlagPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(checkFlag) {
      switch (checkFlag) {
        case 0:
          return '待签到'
        case 1:
          return '已签到'
        case 2:
          return '今日未签到'
        case 3:
          return '已签退'
      }
  }
}