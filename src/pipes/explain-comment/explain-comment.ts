import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainCommentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainComment',
})
export class ExplainCommentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(commnet) {
    switch (commnet) {
      case 1:
        return '优秀'
      case 2:
        return '称职'
      case 3:
        return '基本称职'
      case 4:
        return '不称职'
      default:
        return '无网络'
    }
  }
}
