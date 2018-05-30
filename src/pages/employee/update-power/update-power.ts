import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmployeeProvider } from '../../../providers/employee/employee';

/**
 * Generated class for the UpdatePowerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-power',
  templateUrl: 'update-power.html',
})
export class UpdatePowerPage {
  employee;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private employeeProvider: EmployeeProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.employee = this.navParams.data;
    console.log('ionViewDidLoad UpdatePowerPage');
  }

  submit() {
    this.employeeProvider.updateEmployee(this.employee)
    .subscribe(
      falg => {
        if (falg) {
          let text = '修改成功'
          this.presentToast(text);
          this.navCtrl.pop();
        } else {
          let text = '修改失败'
          this.presentToast(text);
        }
      }
    )
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
