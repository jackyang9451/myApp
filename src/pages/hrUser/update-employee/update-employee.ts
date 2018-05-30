import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmployeeProvider } from '../../../providers/employee/employee';

/**
 * Generated class for the UpdateEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-employee',
  templateUrl: 'update-employee.html',
})
export class UpdateEmployeePage {
  employee;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private employeeProvider: EmployeeProvider,
    public toastCtrl: ToastController) {
      this.employee = this.navParams.data
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateEmployeePage');
  }
  /**
   * 提交修改
   */
  submit() {
    this.employeeProvider.updateEmployee(this.employee)
      .subscribe(flag => {
        if (flag) {
          let text = '用户信息更新成功'
          this.presentToast(text);
        } else {
          let text = '失败！用户信息更新'
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
