import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ExplainDutyIdPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'explainDutyId',
})
export class ExplainDutyIdPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(dutyId) {
    if (dutyId == 777) {
      return '公安局副局长'
    }
    if (dutyId == 888) {
      return '公安局常务副局长'
    }
    if (dutyId == 999) {
      return '公安局局长'
    }
    if (dutyId == 111111) {
      return '暂定'
    }
    let dutyIdString = dutyId.toString();
    if (dutyIdString[0] == '1') {
      return dutyIdString[2] == '1'?'刑事侦查支队队长':'刑事侦查支队队员'
    }
    if (dutyIdString[0] == '2') {
      return dutyIdString[2] == '1'?'反恐支队队长':'反恐支队队员'
    }
    if (dutyIdString[0] == '3') {
      return dutyIdString[2] == '1'?'巡逻警察支队队长':'巡逻警察支队队员'
    }
    if (dutyIdString[0] == '4') {
      return dutyIdString[2] == '1'?'禁毒支队队长':'禁毒支队队员'
    }
    
  }
}
