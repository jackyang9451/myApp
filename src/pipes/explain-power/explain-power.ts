import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainPowerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainPower',
})
export class ExplainPowerPipe implements PipeTransform {

  transform(power) {
      switch (power) {
        case 0:
          return '科员'
        case 1:
          return '副科'
        case 2:
          return '科长'
        case 3:
          return '副处级'
        case 4:
          return '处级'
      }
  }
}
