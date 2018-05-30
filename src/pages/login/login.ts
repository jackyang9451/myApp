import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,FabContainer } from 'ionic-angular';
import { HrloginProvider } from '../../providers/hrlogin/hrlogin';
import { EmployeeProvider } from '../../providers/employee/employee';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  hrUserId: number;
  empId: number;
  hrUrl: string = 'http://localhost:8080/hr';
  flag: boolean = true;                             //*******************身份标志 默认true 表示是职工
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private hrloginProvider: HrloginProvider,
    private employeeProvider: EmployeeProvider) {
  }

  ionViewDidLoad() {
    console.log('Login.ts  ionViewDidLoad')
  }

  changeHr(fab: FabContainer) {
    fab.close();
    this.flag = false;
    console.log(this.flag)
  }

  changeEmp(fab: FabContainer) {
    fab.close();
    this.flag = true;
    console.log(this.flag)    
  }

  validateHr() {
    this.hrloginProvider.validate(this.hrUserId)
    .subscribe(
      flag => {
        if (flag) {
          console.log('验证成功，跳转到管理页面')
          this.navCtrl.push('TabsPage');
        } else {
          console.log('验证失败，弹出警示框')
      }
    })
  }

  validateEmp() {
    console.log(this.empId);
    this.employeeProvider.validateEmp(this.empId)
    .subscribe(
      (backFlag) => {
        if(backFlag) {
          this.navCtrl.push('TabsEmployeePage',this.empId);
        }
        else{
          console.log('用户不存在，请重试');
        }
      }
    )
  }

}
