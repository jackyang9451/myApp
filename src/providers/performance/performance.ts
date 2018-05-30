import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostAddress } from '../host';

/*
  Generated class for the PerformanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerformanceProvider {
  performanceUrl = `${HostAddress.MyHost}/performance`

  constructor(public http: HttpClient) {
    console.log('Hello PerformanceProvider Provider');
  }

  /**
   * 发起签到的请求
   */
  checkIn(empId) {
    const url = `${this.performanceUrl}/checkIn/${empId}`
    return this.http.get(url);
  }

  /**
   * 发起签退的请求
   */
  checkOut(empId) {
    const url = `${this.performanceUrl}/checkOut/${empId}`
    return this.http.get(url);
  }
  /**
   * 获取绩效详情
   */
  getPerformance(empId) {
    const url = `${this.performanceUrl}/${empId}`
    return this.http.get(url);
  }

  /**
   * 获取绩效分数
   */
  getGrade(empId) {
    const url = `${this.performanceUrl}/grade/${empId}`
    return this.http.get(url);
  }

  /**
   * 获取指定empId的小跟班们的信息
   */
  getFollowers(empId) {
    const url = `${this.performanceUrl}/followers/${empId}`
    return this.http.get(url);
  }
}
