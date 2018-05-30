import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-detail',
  templateUrl: 'employee-detail.html',
})
export class EmployeeDetailPage {
  employee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // 这个操作放在ionViewDidLoad中会报错，可能是启动顺序的问题
    // 看我直接给你改了
  }

  ionViewDidLoad() {
    //神赋值
    this.employee = this.navParams.data    
    console.log('ionViewDidLoad EmployeeDetailPage');
  }

}
