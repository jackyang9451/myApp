import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmployeeProvider } from '../../../providers/employee/employee';

/**
 * Generated class for the AddEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {
  empName;
  sex;
  deptId;
  zzmm;
  ygxz;
  power;
  boss

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private employeeProvider: EmployeeProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeePage');
  }

  submit() {
    let employee = {
      'empName': this.empName,
      'sex': this.sex,
      'deptId': this.deptId,
      'zzmm': this.zzmm,
      'ygxz': this.ygxz,
      'power': this.power,
      'boss': this.boss
    }
    console.log(employee);
    this.employeeProvider.addEmployee(employee)
      .subscribe(flag => {
        if (flag) {
          let text = '用户信息添加成功'
          this.presentToast(text);
        } else {
          let text = '失败！用户信息添加'
          this.presentToast(text);          
        }
      })
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });
    toast.present(toast);
  }

}
