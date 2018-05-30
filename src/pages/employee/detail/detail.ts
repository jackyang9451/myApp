import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeProvider } from '../../../providers/employee/employee';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  empId;
  employee: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private employeeProvider: EmployeeProvider        // *******************这个地方必须要加作用域修饰符要不会提示不存在？
    ) {
  }

  ionViewDidLoad() {
    console.log('获取到了登陆的ID为：'+this.navParams.data)
    this.empId = this.navParams.data;
    this.getEmployee(this.empId);
  }

   //暂时不写参数 ID：
   getEmployee(empId) {
    this.employeeProvider.getEmployee(empId).subscribe(
      employee => this.employee = employee
    )
  }
}
