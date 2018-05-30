import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmployeeProvider } from '../../../providers/employee/employee';

import { Platform, ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the AllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all',
  templateUrl: 'all.html',
})
export class AllPage {
  // id: number = 1;
  employees;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private employeeProvider: EmployeeProvider,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.getEmployees();
    console.log('ionViewDidLoad AllPage');
  }
  ionViewDidEnter() {                        //-----------------------每次进入页面都会调用
    this.getEmployees();
  }

  getEmployees() {
     this.employeeProvider.getEmployees()
     .subscribe(
       employees => this.employees = employees
     )
  }

  // itemSelected(employee) {
  //   console.log(employee)
  // }

  openMenu(employee) {
    let actionSheet = this.actionsheetCtrl.create({
      title: '请谨慎操作',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '查看详情',
          icon: !this.platform.is('ios') ? 'list-box' : null,
          handler: () => 
                        {
                          this.navCtrl.push('EmployeeDetailPage',employee)
                          console.log('select clicked')
                        }
        },
        {
          text: '修改',
          icon: !this.platform.is('ios') ? 'build' : null,
          handler: () => {
            this.navCtrl.push('UpdateEmployeePage',employee)            
            console.log('update clicked');
          }
        },
        {
          text: '删除',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('delete clicked');
            this.employeeProvider.deleteEmployee(employee.empId)
            .subscribe(
              flag => {
                if (flag) {
                  let text = '成功！删除用户信息成功！'
                  this.presentToast(text);
                  this.getEmployees();                //********************相当于刷新页面 */
                } else {
                  let text = '失败！删除用户信息失败！'
                  this.presentToast(text);
                }
              }
            )
            
          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
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
