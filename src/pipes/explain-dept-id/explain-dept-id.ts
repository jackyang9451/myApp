import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainDeptIdPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainDeptId',
})
export class ExplainDeptIdPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(deptId: number) {
    switch (deptId) {
      case 1:
        return '刑事侦查支队'
      case 2:
        return '反恐支队'
      case 3:
        return '巡逻警察支队'
      case 4:
        return '禁毒支队'
      case 1001:
        return '局长'
      case 1002:
        return '常务副局长'
      case 1003:
        return '副局长'  
      default:
        return '暂定'
    }
  }
}
