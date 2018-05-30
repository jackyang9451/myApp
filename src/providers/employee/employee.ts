import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostAddress } from "../host";
/*
  Generated class for the EmployeeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeProvider {
  employeeUrl: string = `${HostAddress.MyHost}/employee`

  constructor(public http: HttpClient) {
    console.log('Hello EmployeeProvider Provider');
  }

  /**
   * 获取所有雇员的信息
   */
  getEmployees() {
    let optionalUrl = '/employees'
    const url = `${this.employeeUrl}${optionalUrl}`
    return this.http.get(url);
  }

  /**
   * 获取一个员工的信息Solo
   */

   getEmployee(id: any) {
     const url = `${this.employeeUrl}/${id}`
     return this.http.get(url)
   }

  /**
   * 增加一个雇员,事实证明这里是可以返回布尔类型 *************************************这里对observable理解还不是深刻
   */
  addEmployee(employee: any){
    let optionalUrl = '/employee'
    const url = `${this.employeeUrl}${optionalUrl}`
    return this.http.post(url, employee, httpOptions)
  }

  /**
   * 进行一个登陆验证 结果返回一个id吧 然后直接赋值给页面跳转语句
   */
  validateEmp(empId: number) {
    let optionalUrl = `/validateEmp/${empId}`
    const url = `${this.employeeUrl}${optionalUrl}`;
    return this.http.get(url)
  }

  updateEmployee(employee) {
    let optionalUrl = '/employee';
    const url = `${this.employeeUrl}${optionalUrl}`
    return this.http.put(url,employee,httpOptions)
  }

  /**
   * 删除一个employee
   */
  deleteEmployee(empId) {
    const url = `${this.employeeUrl}/${empId}`
    return this.http.delete(url)
  }

  /**
   * 找出指定人员的小跟班      用于加薪升职
   */
  getFollowers(empId) {
    let optionalUrl = `/followers/${empId}`;
    const url = `${this.employeeUrl}${optionalUrl}`;
    return this.http.get(url)
  }

}
