import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainHonorPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainHonor',
})
export class ExplainHonorPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(honor) {
    switch (honor) {
      case 1:
        return '破获重大刑事案件'
      case 2:
        return '处理重大恐怖袭击'
      case 3:
        return '处理重大社会治安问题'
      case 4:
        return '缴获大量毒品'
      default:
        return '无'
    }
  }
}
