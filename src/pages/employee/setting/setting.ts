import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { EmployeeProvider } from '../../../providers/employee/employee';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  empId;
  employee;
  employees;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private employeeProvider: EmployeeProvider,
    public app: App) {
  }

  ionViewDidLoad() {
    this.empId = this.navParams.data;
    this.getEmployee()
    console.log('ionViewDidLoad SettingPage');
  }

  ionViewDidEnter() {
    this.getFollowers(this.empId);              //寻找下属    
  }

  getEmployee() {
    this.employeeProvider.getEmployee(this.empId)
    .subscribe(
      employee => this.employee = employee
    )
  }

  getFollowers(empId) {
        this.employeeProvider.getFollowers(empId)
        .subscribe(
          employees => this.employees = employees
        )
      }

      
  updatePower(employee) {
    this.navCtrl.push('UpdatePowerPage',employee);
  }

  updatePosition(employee) {
    this.navCtrl.push('UpdatePositionPage',employee);
  }

  logout() {
    this.navCtrl.pop();
  }
}


