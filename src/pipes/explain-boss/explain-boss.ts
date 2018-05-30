import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainBossPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainBoss',
})
export class ExplainBossPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(boss) {
    switch (boss) {
      case 1:
        return '成文碧'
      case 2:
        return '乔亚民'
      case 3:
        return '张保平'
      case 4:
        return '范鹏飞'
      case 7:
        return '刘钰俊'
      case 10:
        return '安小东'
      case 13:
        return '冯强'
    }
  }
}
